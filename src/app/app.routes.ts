import { Routes } from '@angular/router';
import { InventoryComponent } from './component/inventory/inventory.component';
import { Inventory2Component } from './component/inventory2/inventory2.component';
import { Inventory3Component } from './component/inventory3/inventory3.component';
import { CraftingComponent } from './component/crafting/crafting.component';
import { LandingComponent } from './component/landing/landing.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ChartsComponent } from './component/charts/charts.component';
import { LoginComponent } from './component/login/login.component';
import { AdminAuthGuard, AuthGuard } from './guards/auth.guard'; 

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'landing', component: LandingComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AdminAuthGuard] },
    { path: 'inventory/:location', component: InventoryComponent, canActivate: [AdminAuthGuard] },
    { path: 'inventory2/:location', component: Inventory2Component, canActivate: [AdminAuthGuard] },
    { path: 'inventory3/:location', component: Inventory3Component, canActivate: [AdminAuthGuard] },
    { path: 'crafting', component: CraftingComponent, canActivate: [AdminAuthGuard] },
    { path: 'chart', component: ChartsComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
];
