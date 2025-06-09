export interface Recipes {
    publisher: string;
    title: string;
    source_url: string;
    recipe_id: number;
    image_url: string;
}

export interface Recipe {
    recipe_id: string;
    image_url: string;
    title: string;
    publisher: string;
    ingredients:string[];
    source_url: string;
}

export interface ApiResponse {
    count: number;
    recipes: Recipes[];
}