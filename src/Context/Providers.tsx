'use client';

import React, { useState } from "react";
import { StateContext } from "./StateContext";
import {Recipes,Recipe} from "@/Context/types/recipeType";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<Recipes[]>([]);
    const [recipeData, setRecipeData] = useState<Recipe|undefined>(undefined);

    return (
        <StateContext.Provider value={{ search, setSearch, results, setResults, recipeData, setRecipeData }}>
            {children}
        </StateContext.Provider>
    );
};