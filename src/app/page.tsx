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

    const reduceTitle = (title:string,limit:number = 17)=>{
        const newTitle:string[] = [];
        if(title.length > limit){
            title.split(' ').reduce((acc,cur)=>{
                if(acc + cur.length <= limit){
                    newTitle.push(cur);
                }
                return acc + cur.length
            },0);

            return `${newTitle.join(' ')}...`;
        }
        return title;
    }

  return (
    <div className={`w-full h-screen relative`}>
        <NavBar />
        <Banner/>
        <Hero/>
        
        <Content element={
            <div className="w-full h-full p-4 bg-gray-50">
                <ul className="list-none grid grid-cols-4 auto-rows-[370px] gap-4">
                    {results.map((recipe) => (
                        <li key={recipe.recipe_id} className={`h-11/12 overflow-hidden `} >
                            <Card
                                image={recipe.image_url}
                                title={reduceTitle(recipe.title)}
                                text={recipe.publisher}
                                width="90%"        // results in w-[80%]
                                height="70%"       // h-[70%]
                                imageHeight="50%"  // h-[50%]
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