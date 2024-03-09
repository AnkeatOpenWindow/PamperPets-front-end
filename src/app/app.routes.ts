import { Routes } from '@angular/router';
import { InventoryComponent } from './component/inventory/inventory.component';
import { CraftingComponent } from './component/crafting/crafting.component';
import { PagenotfountComponent } from './component/pagenotfount/pagenotfount.component';
// Define your routs here but keep them in order.
export const routes: Routes = [
    {path:"inventory", component: InventoryComponent},
    {path:"crafting", component: CraftingComponent},
    {path:"", redirectTo:"inventory", pathMatch:"full"}, //taking us to our first path
    {path:"**", component: PagenotfountComponent}, //wild card
    
];
