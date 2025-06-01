export interface Recipe {
    publisher: string;
    title: string;
    source_url: string;
    recipe_id: string;
    image_url: string;
}

export interface ApiResponse {
    count: number;
    recipes: Recipe[];
}