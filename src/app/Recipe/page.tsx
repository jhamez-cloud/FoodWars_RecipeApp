"use client";

import NavBar from "@/app/Components/NavBar";
import Banner from "@/app/Components/Banner";
import Footer from "@/app/Components/Footer";
import Carousel from "@/app/Components/Carousel";
import Link from "next/link";
import {StateContext} from "@/Context/StateContext";
import {useContext} from "react";

const Page = () => {

    const context = useContext(StateContext);
    if (!context) {
        throw new Error(`useContext must be used within a Provider with a value`);
    }

    const {recipeData} = context;



    return (
        <div className={`w-full h-screen relative`}>
            <NavBar displaySearch={'hidden'} displayAddRecipe={`flex`}/>
            <Banner/>
            <main className={`w-full min-h-[500px] flex flex-col justify-center items-center px-8`}>
                <h1 className={`text-2xl font-bold p-2`}>GALLERY</h1>
                <section id={`recipe_carousel`} className={`w-full h-[80%] rounded-lg bg-gray-200`}>
                    <Carousel/>
                </section>

                <section id={`recipe_directions`} className={`w-full h-auto`}>
                    <h1 className={`text-3xl font-semibold my-4 text-center`}>Selected Recipe</h1>
                    <div className={`w-full h-auto`}>
                        <div>
                            {recipeData?.ingredients && recipeData.ingredients.length > 0 ? (

                                <ul className="w-full">

                                    <li
                                        className="relative w-full h-[400px] bg-cover bg-center rounded-lg shadow-lg mb-6 flex items-center justify-center"
                                        style={{
                                            backgroundImage: `url(${recipeData.image_url})`,
                                        }}
                                    >

                                        <div className="text-center text-yellow-300 px-4">
                                            <h2 className="text-4xl font-bold drop-shadow-[5px_4px_6px_rgba(0,0,0,0.8)]">
                                                {recipeData.title}
                                            </h2>
                                            <p className="text-lg mt-2 font-semibold drop-shadow-[3px_3px_5px_rgba(0,0,0,0.7)]">
                                                by {recipeData.publisher}
                                            </p>
                                        </div>
                                    </li>


                                    {recipeData.ingredients.map((ingredient, index) => (
                                        <li key={index} className="flex items-start gap-2 mb-2">
                                            <img src="/tick_icon.png" alt="tick" className="w-4 h-4 mt-1" />
                                            <span className="text-gray-800">{ingredient}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="w-full h-[500px] flex flex-col items-center justify-center text-gray-500">
                                    <img
                                        src="/no_search.jpg"
                                        alt="No results"
                                    />
                                    <p className="text-2xl font-bold text-red-600">No recipe search has been made.</p>
                                    <p className={`text-gray-400 font-light`}>Go to <Link href={`/`} className={`text-yellow-300 text-shadow-sm underline`}>Home</Link> page to search for a recipe.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Page;