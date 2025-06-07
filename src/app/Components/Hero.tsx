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
                   title="Waffles"
                   text="Cool recipe to eat with friends in the morning."
                   image="/images/waffleCard.png"
                   width="25%"          // w-[25%]
                   height="72%"         // h-[90%]
                   //imageHeight="140px"  // h-[130px]
               />

               <Card
                   title="Pancakes"
                   text="Cool recipe to eat with friends in the morning."
                   image="/images/pancakeCard.png"
                   width="25%"
                   height="72%"
                  // imageHeight="140px"
               />

               <Card
                   title="Hot Chocolate"
                   text="Cool recipe to eat with friends in the morning."
                   image="/images/chocolateCard.png"
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