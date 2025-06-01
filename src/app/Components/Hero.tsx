import React from 'react';
import Card from './ui/Card';

const Hero = () => {
    return (
       <>
           <h1 className={`text-4xl font-bold text-center mt-8`}>
               Most Searched Recipes
           </h1>
           <div className={`w-full h-3/5 flex justify-around p-8`}>
               <Card title="Waffles" text="Cool recipe to eat with friends in the morning." image="/images/waffleCard.png" width="1/4"/>
               <Card title="Pancakes" text="Cool recipe to eat with friends in the morning." image="/images/pancakeCard.png" width="1/4"/>
               <Card title="Hot Chocolate" text="Cool recipe to eat with friends in the morning." image="/images/chocolateCard.png" width="1/4"/>
           </div>
       </>
    );
};

export default Hero;