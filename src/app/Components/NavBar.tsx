import React from 'react';
import Navlink from './NavLink';
import Image from "next/image";

const NavBar = () => {
    return (
        <div className={`flex flex-col w-full h-24 fixed top-0 shadow-2xl`}>
            <span className={`w-full h-[15px] bg-yellow-300`}></span>

            <div className={`w-full h-full bg-white flex items-center justify-between px-8 py-2 `}>
                <figure className={`flex items-center w-1/5 `}>
                    <Image src={`/nav_logo_1.png`} alt="logo" width={50} height={50}/>
                    <figcaption className={`text-xl text-gray-400 font-light`}>
                        FOOD WARS
                    </figcaption>
                </figure>

                <ul className={`flex items-center justify-around text-xl font-semibold w-2/5`}>
                    <li>
                        <Navlink href={`/Home`}>Home</Navlink>
                    </li>
                    <li>
                        <Navlink href={`/Recipe`}>Recipes</Navlink>
                    </li>
                    <li>
                        <Navlink href={`/About`}>About Us</Navlink>
                    </li>

                </ul>

                <form className={`w-1/4 h-3/5 flex bg-gray-200 rounded-lg p-2`}>
                    <Image src={`/images/search_Icon.svg`} alt="search" width={20} height={20}/>
                    <input type="text" className={`w-full h-full focus:outline-none ml-1.5 caret-yellow-600`} placeholder={`Search For Over 1,000,000 Recipes`}/>
                </form>
            </div>
        </div>
    );
};

export default NavBar;