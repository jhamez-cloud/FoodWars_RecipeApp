import React, { useEffect, useState } from "react";
import {
    motion,
    useMotionValue,
    useAnimation,
    useTransform,
    PanInfo,
    ResolvedValues,
} from "framer-motion";

const IMGS:string[] = [
    '/images/cooked-meat-on-plate.jpg',
    '/images/slide2.jpg',
    '/images/carousel_img_1.avif',
    '/images/slide4.jpg',
    '/images/carousel_img_4.webp',
];

interface RollingGalleryProps {
    autoplay?: boolean;
    pauseOnHover?: boolean;
    images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
                                                           autoplay = true,
                                                           pauseOnHover = true,
                                                           images = [],
                                                       }) => {
    // Use default images if none are provided
    const galleryImages = images.length > 0 ? images : IMGS;

    const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenSizeSm(window.innerWidth <= 640);
        };

        handleResize(); // run once on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 3D geometry calculations
    const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
    const faceCount: number = galleryImages.length;
    const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
    const radius: number = cylinderWidth / (2 * Math.PI);

    // Framer Motion values and controls
    const dragFactor: number = 0.05;
    const rotation = useMotionValue(0);
    const controls = useAnimation();

    // Create a 3D transform based on the rotation motion value
    const transform = useTransform(
        rotation,
        (val: number) => `rotate3d(0,1,0,${val}deg)`
    );

    const startInfiniteSpin = (startAngle: number) => {
        controls.start({
            rotateY: [startAngle, startAngle - 360],
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
            },
        });
    };

    useEffect(() => {
        if (autoplay) {
            const currentAngle = rotation.get();
            startInfiniteSpin(currentAngle);
        } else {
            controls.stop();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [autoplay]);

    const handleUpdate = (latest: ResolvedValues) => {
        if (typeof latest.rotateY === "number") {
            rotation.set(latest.rotateY);
        }
    };

    const handleDrag = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ): void => {
        controls.stop();
        rotation.set(rotation.get() + info.offset.x * dragFactor);
    };

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ): void => {
        const finalAngle = rotation.get() + info.velocity.x * dragFactor;
        rotation.set(finalAngle);
        if (autoplay) {
            startInfiniteSpin(finalAngle);
        }
    };

    const handleMouseEnter = (): void => {
        if (autoplay && pauseOnHover) {
            controls.stop();
        }
    };

    const handleMouseLeave = (): void => {
        if (autoplay && pauseOnHover) {
            const currentAngle = rotation.get();
            startInfiniteSpin(currentAngle);
        }
    };

    return (
        <div className="relative h-[400px] w-full overflow-hidden z-0 ">

            <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
                <motion.div
                    drag="x"
                    dragElastic={0}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    animate={controls}
                    onUpdate={handleUpdate}
                    style={{
                        transform: transform,
                        rotateY: rotation,
                        width: cylinderWidth,
                        transformStyle: "preserve-3d",
                    }}
                    className="flex min-h-full cursor-grab items-center justify-center [transform-style:preserve-3d]"
                >
                    {galleryImages.map((url, i) => (
                        <div
                            key={i}
                            className="group absolute flex h-full items-center justify-center [backface-visibility:hidden] md:p-[6%]"
                            style={{
                                width: `${faceWidth}px`,
                                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                            }}
                        >
                            <img
                                src={url}
                                alt="gallery"
                                className="pointer-events-none w-full h-full rounded-[15px] border-[3px] border-white object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                            />

                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default RollingGallery;
