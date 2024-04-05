import { Ingredients } from "./ingredients.model";


export interface Recipes {
    id?: number;
    name: string;
    description: string;
    amountCrafted: number;
    ingredients?: Ingredients[]; // Add this line
    isCraftable?: boolean; // frontends
    icon: string;
    locationId: number;
}