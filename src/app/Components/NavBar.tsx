"use client";

import React, { useContext, useRef } from "react";
import Navlink from "./NavLink";
import Image from "next/image";
import { StateContext } from "@/Context/StateContext";
//import { useRouter } from "next/navigation";

interface displayProps{
    displaySearch:string;
    displayAddRecipe:string;
}

const NavBar = (props:displayProps) => {
    //const router = useRouter();
    const context = useContext(StateContext);
    if (!context) {
        throw new Error(`useContext must be used within a Provider with a value`);
    }

    const { search,setSearch,setResults,results } = context;
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const inputValue = inputRef.current?.value || "";
        setSearch(inputValue);
        //console.log(search);

        const res = await fetch(`/api/recipes/${inputValue}`);
        const data = await res.json();
        console.log(data);
        setResults(data.recipes);
        console.log(results);

    };

    return (
        <div className={`flex flex-col w-full h-24 fixed top-0 shadow-2xl z-50`}>
            <span className={`w-full h-[15px] bg-yellow-300`}></span>

            <div className={`w-full h-full bg-white flex items-center justify-between px-8 py-2 `}>
                <figure className={`flex items-center w-1/5 `}>
                    <Image src={`/nav_logo_1.png`} alt="logo" width={50} height={50} />
                    <figcaption className={`text-xl text-gray-400 font-light`}>
                        FOOD WARS
                    </figcaption>
                </figure>

                <ul className={`flex items-center justify-around text-xl font-semibold w-2/5`}>
                    <li><Navlink href={`/Home`}>Home</Navlink></li>
                    <li><Navlink href={`/Recipe`}>Recipes</Navlink></li>
                    <li><Navlink href={`/About`}>About Us</Navlink></li>
                </ul>

                <form onSubmit={handleSubmit} className={`w-1/4 h-3/5 ${props.displaySearch} bg-gray-200 rounded-lg p-2 `}>
                    <button type="submit">
                        <Image src={`/images/search_Icon.svg`} alt="search" width={20} height={20} />
                    </button>
                    <input
                        ref={inputRef}
                        type="text"
                        className={`w-full h-full focus:outline-none ml-1.5 caret-yellow-600`}
                        placeholder={`Search For Over 1,000,000 Recipes`}
                    />
                </form>
                <div className={`w-1/4 h-3/5 ${props.displayAddRecipe} justify-center items-center bg-yellow-300 rounded-lg p-2`}>
                    <button className={`w-full h-full hover:cursor-pointer p-4 flex justify-around items-center`}>
                        <img src="/plus_icon.png" alt=""/>
                        Support Project | Add Your Recipe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
