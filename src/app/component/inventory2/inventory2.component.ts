import { Component, OnInit } from '@angular/core';
import { Inventory } from '../../models/inventory.model';
import { CommonModule } from '@angular/common';
import { InventoryItemComponent } from '../cards/inventory-item/inventory-item.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory2',
  standalone: true,
  imports: [CommonModule, InventoryItemComponent, ReactiveFormsModule],
  templateUrl: './inventory2.component.html',
  styleUrls: ['./inventory2.component.css']
})
export class Inventory2Component implements OnInit {
  constructor(private service: InventoryService, private route: ActivatedRoute) {}

  inventoryList: Inventory[] = [];
  locationName: string = '';
  locationId: number = 2;  // Location ID specific to this component

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.locationName = params.get('location') || 'Unknown Location';
    });

    this.service.getAllInventory(this.locationId).subscribe((data) => {
      this.inventoryList = data;
    });
  }

  // Form variables
  newinventoryItem = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  addNewinventory() {
    const newItem: Inventory = {
      name: this.newinventoryItem.value.name!,
      icon: "",
      description: this.newinventoryItem.value.description!,
      amount: 10,
      locationId: this.locationId,
    };

    this.inventoryList.push(newItem);
    this.newinventoryItem.reset();
  }
}
