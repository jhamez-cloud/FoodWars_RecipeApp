import {Recipe} from "@/Context/types/recipeType";
import React from "react";

export interface setContextType {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    results:Recipe[];
    setResults: React.Dispatch<React.SetStateAction<Recipe[]>>;
}