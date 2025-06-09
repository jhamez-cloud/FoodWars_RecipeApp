"use client";
import NavBar from "@/app/Components/NavBar";
import Banner from "@/app/Components/Banner";
import Hero from "@/app/Components/Hero";
import Content from "./Components/Content";
import Footer from "@/app/Components/Footer";
import {useContext,useState} from "react";
import {useRouter} from "next/navigation";
import {StateContext} from "@/Context/StateContext";
import {Recipes} from "@/Context/types/recipeType";

const Page = () => {

    const context = useContext(StateContext);
    if (!context) {
        throw new Error(`useContext must be used within a Provider with a value`);
    }
    const {results,setRecipeData,recipeData} = context;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const recipesPerPage = 12;

    const totalPages:number    = Math.ceil(results?.length / recipesPerPage);
    const startIndex:number = (currentPage - 1) * recipesPerPage;
    const endIndex:number = startIndex + recipesPerPage;
    const currentRecipes:Recipes[] = results?.slice(startIndex, endIndex) || [];

    const router = useRouter();

    const handleClick = async (id:number) =>{
        const res = await fetch(`/api/recipe/${id}`);
        const data = await res.json();
        setRecipeData(data.recipe);

        router.push("/Recipe");
        //console.log(recipeData);
    }

  return (
    <div className={`w-full h-screen relative`}>
        <NavBar displaySearch={'flex'} displayAddRecipe={`hidden`}/>
        <Banner/>
        <Hero/>

        <Content
            element={
                <div className="w-full h-auto p-4 px-8 bg-white">
                    {currentRecipes.length === 0 ? (
                        <div className="w-full h-[500px] flex flex-col items-center justify-center text-gray-500">
                            <img
                                src="/no_search.jpg"
                                alt="No results"
                            />
                            <p className="text-2xl font-bold text-red-600">No recipes found. Try a different search.</p>
                            <p className={`text-gray-400 font-light`}>You either made a wrong,invalid or a typo in your search. Or Recipe doesnt exist in our database yet.</p>
                        </div>
                    ) : (
                        <ul className="w-full h-full list-none grid grid-cols-[repeat(4,_24%)] grid-rows-[repeat(3,_380px)] gap-4" id={`recipeStart`}>
                            {currentRecipes.map((recipe) => (
                                <li
                                    key={recipe.recipe_id}
                                    className="h-full w-full bg-white rounded shadow-md overflow-hidden flex flex-col justify-between"
                                >
                                    <img
                                        src={recipe.image_url}
                                        alt={recipe.title}
                                        className="w-full h-[170px] object-cover"
                                    />
                                    <div className="flex-1 p-2 flex flex-col justify-evenly bg-gray-200">
                                        <h1 className="text-lg font-medium">{recipe.title}</h1>
                                        <p className="text-sm text-gray-600">{recipe.publisher}</p>
                                        <button
                                            className="mt-2 px-4 py-2 bg-yellow-300 text-black text-sm rounded hover:bg-yellow-400 hover:cursor-pointer"
                                            onClick={()=>handleClick(recipe.recipe_id)}
                                        >
                                            Search Recipe
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            }
        />
        {/*Pagination here instead*/}
        <div className="w-full flex justify-center px-8 pr-10 py-2">
            {currentPage > 1 && (
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="w-[100px] h-[50px] m-2 bg-yellow-300 rounded-sm text-xl text-white font-bold hover:cursor-pointer"

                >
                    <a href="#recipeStart">‹‹ Prev</a>
                </button>
            )}
            {currentPage < totalPages && (
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="w-[100px] h-[50px] m-2 bg-yellow-300 rounded-sm text-xl text-white font-bold hover:cursor-pointer"
                >
                    <a href="#recipeStart">Next ››</a>
                </button>
            )}
        </div>
        <Footer/>
    </div>
  )
}

export default Page