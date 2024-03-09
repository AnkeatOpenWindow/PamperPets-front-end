import { Routes } from '@angular/router';
import { landingComponent } from './component/inventory/inventory.component';
import { CraftingComponent } from './component/crafting/crafting.component';
import { PagenotfountComponent } from './component/pagenotfount/pagenotfount.component';
// Define your routs here but keep them in order.
export const routes: Routes = [
    {path:"landing", component: landingComponent},
    {path:"crafting", component: CraftingComponent},
    {path:"", redirectTo:"landing", pathMatch:"full"}, //taking us to our first path
    {path:"**", component: PagenotfountComponent}, //wild card
    
];
