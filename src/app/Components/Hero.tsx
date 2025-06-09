import React from 'react';
import Card from './ui/Card';

const Hero = () => {
    return (
       <>
           <h1 className={`text-4xl font-bold text-center mt-8`}>
               Most Searched Recipes
           </h1>
           <div className={`w-full h-3/5 flex justify-around p-8 pb-4`}>
               <Card
                   title="Pizza"
                   text="Cool recipe to eat with friends in the morning."
                   image="/images/pizzaCard.jpg"
                   width="25%"          // w-[25%]
                   height="72%"         // h-[90%]
                   //imageHeight="140px"  // h-[130px]
               />

               <Card
                   title="Pasta"
                   text="Cool recipe to eat with friends in the morning."
                   image="/images/pastaCard.png"
                   width="25%"
                   height="72%"
                  // imageHeight="140px"
               />

               <Card
                   title="Chocolate"
                   text="Cool recipe to eat with friends in the morning."
                   image="/images/chocolateCard.webp"
                   width="25%"
                   height="72%"
                   //imageHeight="140px"
               />

           </div>
           <h1 className={`text-4xl font-bold text-center`}>Search Results:</h1>
       </>
    );
};

export default Hero;