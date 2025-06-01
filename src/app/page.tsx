"use client";
import NavBar from "@/app/Components/NavBar";
import Banner from "@/app/Components/Banner";
import Hero from "@/app/Components/Hero";
import Content from "./Components/Content";
import Footer from "@/app/Components/Footer";
import Card from "@/app/Components/ui/Card";
import {useContext} from "react";
import {StateContext} from "@/Context/StateContext";

const Page = () => {

    const context = useContext(StateContext);
    if (!context) {
        throw new Error(`useContext must be used within a Provider with a value`);
    }
    const {results} = context;

  return (
    <div className={`w-full h-screen relative`}>
        <NavBar />
        <Banner/>
        <Hero/>
        
        <Content element={
            <div className="w-full h-full p-4 bg-gray-50">
                <ul className="list-none grid grid-cols-4">
                    {results.map((recipe) => (
                        <li key={recipe.recipe_id}>
                            <Card
                                image={recipe.image_url}
                                title={recipe.title}
                                text={recipe.publisher}
                                width="full"
                            />
                        </li>
                    ))}
                </ul>
            </div>

        }
        />
        
        <Footer/>
    </div>
  )
}

export default Page