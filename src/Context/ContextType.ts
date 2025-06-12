import {Recipes,Recipe} from "@/Context/types/recipeType";
import React from "react";

export interface setContextType {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    results:Recipes[];
    setResults: React.Dispatch<React.SetStateAction<Recipes[]>>;
    recipeData:Recipe | undefined;
    setRecipeData: React.Dispatch<React.SetStateAction<Recipe | undefined>>;
    loading:boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}