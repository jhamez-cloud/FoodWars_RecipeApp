'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
    '/images/cooked-meat-on-plate.jpg',
    '/images/slide2.jpg',
    '/images/carousel_img_1.avif',
    '/images/slide4.jpg',
    '/images/carousel_img_4.webp',
];

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((index - 1 + images.length) % images.length);
    const next = () => setIndex((index + 1) % images.length);

    return (
        <div className="relative w-full h-[400px] overflow-hidden">
            <div className="w-full h-full relative">
                <Image
                    src={images[index]}
                    alt="carousel"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
                <button onClick={prev} className="bg-white rounded-full w-12 h-12 flex items-center justify-center  shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                    <span className="text-yellow-300 text-3xl drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">❮</span>
                </button>
                <button onClick={next} className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                    <span className="text-yellow-300 text-3xl drop-shadow-[1px_1px_2px_rgba(0,0,0,0.7)]">❯</span>
                </button>
            </div>

        </div>
    );
}
