import { Routes } from '@angular/router';
import { inventoryComponent } from './component/inventory/inventory.component';
import { CraftingComponent } from './component/crafting/crafting.component';
import { LandingComponent } from './component/landing/landing.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ChartsComponent } from './component/charts/charts.component';
import { LoginComponent } from './component/login/login.component';
// Define your routs here but keep them in order.
export const routes: Routes = [
    {path:"landing", component: LandingComponent},
    {path:"login", component: LoginComponent},
    {path:"dashboard", component: DashboardComponent},
    {path:"inventory", component: inventoryComponent},
    {path:"crafting", component: CraftingComponent},
    {path:"chart", component: ChartsComponent},
    {path:"", redirectTo:"landing", pathMatch:"full"}, //taking us to our first path
];
