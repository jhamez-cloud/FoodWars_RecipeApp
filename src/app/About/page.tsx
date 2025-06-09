import React from 'react';
import NavBar from "@/app/Components/NavBar";
import Banner from "@/app/Components/Banner";
import Footer from "@/app/Components/Footer";

const Page = () => {
    return (
        <div className={`w-full h-full relative`}>
            <NavBar displaySearch={'hidden'} displayAddRecipe={`flex`}/>
            <Banner/>
            <h1 className={`w-full h-3/5 text-xl font-semibold p-16 text-left`}>
                Hello! I’m <em className={`text-blue-500`}>James Kekeli</em>, and I’m excited to present my project on <em className={`text-blue-500 font-semibold`}>Food Wars</em>. While exploring this amazing website, I discovered a gastronomic universe full of delicious recipes, helpful tips, and culinary inspiration. <em className={`text-blue-500 font-semibold`}>Food Wars</em> is a place where experienced chefs and beginner cooks can come together in their passion for food.One of the things that fascinated me was the variety of recipes available.
                <br/>
                <br/>
                From traditional and comforting dishes to more innovative creations, there are options for every taste and occasion. Each recipe is carefully selected and tested to ensure that the results are always tasty and worth sharing. In addition to recipes, <em className={`text-blue-500 font-semibold`}>Food Wars</em> also offers useful tips to improve cooking skills. From preparation techniques to flavor pairing suggestions, the site invites me to explore and experiment in the kitchen. It’s a welcoming and inclusive environment where everyone is encouraged to dive into the art of cooking and discover new possibilities. <br/>
               <br/> In short, <em className={`text-blue-500 font-semibold`}>Food Wars</em> is an inspiring culinary space that invites me to explore, create, and share my love for cooking. I hope my presentation has sparked your interest in joining me on this delicious journey with <em className={`text-blue-500 font-semibold`}>Food Wars</em>!
            </h1>
            <Footer/>
        </div>
    );
};

export default Page;