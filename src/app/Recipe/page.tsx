"use client";

import NavBar from "@/app/Components/NavBar";
import Banner from "@/app/Components/Banner";
import Footer from "@/app/Components/Footer";
import Carousel from "@/app/Components/Carousel";
import {StateContext} from "@/Context/StateContext";
import {useContext} from "react";
import {Recipe} from "@/Context/types/recipeType";

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
                    <h1 className={`text-2xl font-semibold my-4`}>Selected Recipe</h1>
                    <div className={`w-full h-auto`}>
                        <div>
                            {recipeData?.ingredients && recipeData.ingredients.length > 0 ? (
                                <ul>
                                    {recipeData.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="w-full h-[500px] flex flex-col items-center justify-center text-gray-500">
                                    <img
                                        src="/no_search.jpg"
                                        alt="No results"
                                    />
                                    <p className="text-2xl font-bold text-red-600">No recipe found for {}. Try a different search.</p>
                                    <p className={`text-gray-400 font-light`}>Recipe data has been deleted from database or site doesnt exist</p>
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