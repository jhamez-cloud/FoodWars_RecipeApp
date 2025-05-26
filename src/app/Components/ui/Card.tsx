import React from 'react';
import Image from "next/image";
import SearchButton from "@/app/Components/ui/SearchButton";

interface  CardProps {
    image:string;
    title:string;
    text:string;
}

const Card = (props:CardProps) => {
    return (
        <div className={`w-1/4 h-9/10 bg-gray-200`}>
            <Image src={props.image} alt={props.title} width={300} height={200} className={`w-full`}/>
            <div className={`h-2/5 p-4 flex flex-col justify-around`}>
                <h1 className={`text-2xl font-semibold`}>{props.title}</h1>
                <p>{props.text}</p>
                <SearchButton text={`Search Recipe`}/>
            </div>
        </div>
    );
};

export default Card;