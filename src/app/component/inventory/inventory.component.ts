import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';
import { Inventory } from '../../models/inventory.model';
import { InventoryItemComponent } from '../cards/inventory-item/inventory-item.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    CommonModule,
    InventoryItemComponent, // Import InventoryItemComponent here
    ReactiveFormsModule
  ],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private service: InventoryService, private route: ActivatedRoute) {}

  inventoryList: Inventory[] = [];
  locationName: string = '';
  locationId: number = 1;  // Location ID specific to this component

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.locationName = params.get('location') || 'Unknown Location';
    });
  
    this.service.getAllInventory(this.locationId).subscribe((data) => {
      this.inventoryList = data;
    });
  }

  newInventoryItem = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  addNewInventory() {
    const newItem: Inventory = {
      name: this.newInventoryItem.value.name!,
      icon: '',
      description: this.newInventoryItem.value.description!,
      amount: 10, 
      locationId: 1,
    };

    this.inventoryList.push(newItem);
    this.newInventoryItem.reset();
  }
}
