import { Inventory } from "./inventory.model";

export interface Ingredients {
    ingredientId: number;
    inventoryId: number;
    recipeId: string;
    amountNeeded: number;
    inventory: Inventory;
}