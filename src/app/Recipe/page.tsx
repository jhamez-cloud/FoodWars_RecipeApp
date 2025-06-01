"use client";

import NavBar from "@/app/Components/NavBar";
import Banner from "@/app/Components/Banner";
import Footer from "@/app/Components/Footer";
import Carousel from "@/app/Components/Carousel";
import {StateContext} from "@/Context/StateContext";
import {useContext} from "react";

const Page = () => {

    const context = useContext(StateContext);
    if (!context) {
        throw new Error(`useContext must be used within a Provider with a value`);
    }

    //const {search} = context;



    return (
        <div className={`w-full h-full`}>
            <NavBar/>
            <Banner/>
            <main className={`w-full min-h-[500px] flex flex-col justify-center items-center px-8`}>
                <section id={`recipe_carousel`} className={`w-full h-9/10 rounded-lg`}>
                    <Carousel/>
                </section>

                <section id={`recipe_directions`} className={`w-full h-auto`}>
                    <h1 className={`text-2xl font-semibold my-4`}>Selected Recipe</h1>
                    <div className={`w-full h-auto`}>
                        <div>
                            <ul>

                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Page;