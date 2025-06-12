'use client';

import React, { useState } from "react";
import { StateContext } from "./StateContext";
import {Recipes,Recipe} from "@/Context/types/recipeType";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<Recipes[]>([]);
    const [recipeData, setRecipeData] = useState<Recipe|undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <StateContext.Provider value={{ search, setSearch, results, setResults, recipeData, setRecipeData, loading, setLoading }}>
            {children}
        </StateContext.Provider>
    );
};