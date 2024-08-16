import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Dashboard } from '../../../models/dashboard.model';
import { DashboardService } from '../../../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent {
  constructor(private service: DashboardService, private router: Router) {}

  @Input() item: Dashboard = { 
    id: 0, 
    name: 'Dummy', 
    address: 'Dummy data',
    icon: 'assets/toy.jpg',
  };

  tempUpdateValue = 0;

  // Update the amount value
  updateAmount(e: any) {
    this.tempUpdateValue = parseInt(e.target.value);
  }

  // Navigate to the appropriate inventory based on the item's id or other properties
  navigateToInventory() {
    let inventoryRoute = '/inventory'; // Default route
    let locationName = '';
  
    if (this.item.id === 1) {
      inventoryRoute = '/inventory';
      locationName = 'Pretoria';
    } else if (this.item.id === 2) {
      inventoryRoute = '/inventory2';
      locationName = 'Cape Town';
    } else if (this.item.id === 3) {
      inventoryRoute = '/inventory3';
      locationName = 'Johannesburg';
    }
  
    this.router.navigate([`${inventoryRoute}/${locationName}`]);
  }
  

  // Navigate to the crafting page
  navigateToCrafting() {
    this.router.navigate(['/crafting']);
  }
}
