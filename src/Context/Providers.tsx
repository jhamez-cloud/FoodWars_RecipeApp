'use client';

import React, { useState } from "react";
import { StateContext } from "./StateContext";
import {Recipe} from "@/Context/types/recipeType";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState<Recipe[]>([]);

    return (
        <StateContext.Provider value={{ search, setSearch, results, setResults }}>
            {children}
        </StateContext.Provider>
    );
};