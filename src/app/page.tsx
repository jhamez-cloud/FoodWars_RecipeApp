"use client";
import NavBar from "@/app/Components/NavBar";
import Banner from "@/app/Components/Banner";
import Hero from "@/app/Components/Hero";
import Content from "./Components/Content";
import Footer from "@/app/Components/Footer";
import {useContext,useState} from "react";
import {StateContext} from "@/Context/StateContext";
import {Recipe} from "@/Context/types/recipeType";

const Page = () => {

    const context = useContext(StateContext);
    if (!context) {
        throw new Error(`useContext must be used within a Provider with a value`);
    }
    const {results} = context;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const recipesPerPage = 12;

    const totalPages:number    = Math.ceil(results.length / recipesPerPage);
    const startIndex:number = (currentPage - 1) * recipesPerPage;
    const endIndex:number = startIndex + recipesPerPage;
    const currentRecipes:Recipe[] = results.slice(startIndex, endIndex);

  return (
    <div className={`w-full h-screen relative`}>
        <NavBar />
        <Banner/>
        <Hero/>
        
        <Content element={
            <div className="w-full h-auto p-4 px-8 bg-gray-100">
                <ul className="w-full h-full list-none grid grid-cols-[repeat(4,_24%)] grid-rows-[repeat(3,_380px)] gap-4">
                    {currentRecipes.map((recipe) => (
                        <li key={recipe.recipe_id} className="h-full w-full bg-white rounded shadow-md overflow-hidden flex flex-col justify-between">
                            <img
                                src={recipe.image_url}
                                alt={recipe.title}
                                className="w-full h-[170px] object-cover"
                            />
                            <div className="flex-1 p-2 flex flex-col justify-evenly bg-gray-200">
                                <h1 className="text-lg font-medium ">{recipe.title}</h1>
                                <p className="text-sm text-gray-600">{recipe.publisher}</p>
                                <button className="mt-2 px-4 py-2 bg-yellow-300 text-black text-sm rounded hover:bg-yellow-400 hover:cursor-pointer">
                                    Search Recipe
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        }
        />
        {/*Pagination here instead*/}
        <div className="w-full flex justify-center px-8 pr-10 py-2">
            {currentPage > 1 && (
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="w-[100px] h-[50px] m-2 bg-yellow-300 rounded-sm text-xl text-white font-bold"
                >
                    ‹‹ Prev
                </button>
            )}
            {currentPage < totalPages && (
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="w-[100px] h-[50px] m-2 bg-yellow-300 rounded-sm text-xl text-white font-bold"
                >
                    Next ››
                </button>
            )}
        </div>
        <Footer/>
    </div>
  )
}

export default Page