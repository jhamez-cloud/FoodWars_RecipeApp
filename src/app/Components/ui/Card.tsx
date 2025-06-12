import React from 'react';
//import Image from "next/image";
import SearchButton from "@/app/Components/ui/SearchButton";


interface  CardProps {
    image:string;
    title:string;
    text:string;
    //imageHeight:string;
    //imageWidth:string;
}

const Card = (props:CardProps) => {

    //const imageHeightClass = props.imageHeight ? `h-[${props.imageHeight}]` : "h-auto";

    return (
        <div className={`w-1/4 h-11/12 bg-gray-200`}>
            <img src={props.image} alt={props.title} className={`w-full h-3/5`}/>
            <div className="h-2/5 p-4 pb-0 flex flex-col justify-center gap-0.5">
                <h1 className="text-2xl font-semibold">{props.title}</h1>
                <p>{props.text}</p>
                <SearchButton text="Search Recipe" />
            </div>
        </div>
    );
};

export default Card;