import React from 'react';
//import Image from "next/image";
import SearchButton from "@/app/Components/ui/SearchButton";

interface  CardProps {
    image:string;
    title:string;
    text:string;
    width:string;
    height:string;
    imageHeight:string;
    //imageWidth:string;
}

const Card = (props:CardProps) => {

    const widthClass = props.width ? `w-[${props.width}]` : "w-full";
    const heightClass = props.height ? `h-[${props.height}]` : "h-auto";
    const imageHeightClass = props.imageHeight ? `h-[${props.imageHeight}]` : "h-auto";

    return (
        <div className={`${widthClass} ${heightClass} bg-gray-200`}>
            <img src={props.image} alt={props.title} className={`w-full ${imageHeightClass}`} />
            <div className="h-2/5 p-4 pb-0 flex flex-col justify-around">
                <h1 className="text-2xl font-semibold">{props.title}</h1>
                <p>{props.text}</p>
                <SearchButton text="Search Recipe" />
            </div>
        </div>
    );
};

export default Card;