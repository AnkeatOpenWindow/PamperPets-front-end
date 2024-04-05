import { Component } from '@angular/core';
import { Inventory } from '../../models/inventory.model';
import { CommonModule } from '@angular/common';
import { InventoryItemComponent } from '../cards/inventory-item/inventory-item.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory3',
  standalone: true,
  imports: [CommonModule, InventoryItemComponent, ReactiveFormsModule],
  templateUrl: './inventory3.component.html',
  styleUrl: './inventory3.component.css'
})
export class Inventory3Component {
  constructor(private service: InventoryService){}
  inventoryList: Inventory[] = [
    {
    id: 1,
    name: "Cotten",
    icon: "assets/cotton.jpg",
    description: "To keep you loving pet warm",
    amount: 4,
    locationId: 1,
    
    },
    {
      id: 2,
      name: "Plastic",
      icon: "assets/plastic.jpg",
      description: "To keep you loving pet busy",
      amount: 10, 
      locationId: 1,
    },
    {
      id: 3,
      name: "Embrodery",
      icon: "assets/embrodery.jpg",
      description: "To add a bit of style to their clothes",
      amount: 4, 
      locationId: 1,
    },
    {
      id: 4,
      name: "Dog Tag",
      icon: "assets/tag.jpg",
      description: "To make sure they find their wa home",
      amount: 4, 
      locationId: 1,
    },
      
  ]
//
// TODO: pass the location id to this get all invetory service
locationId: number = 3;

ngOnInit(){
  this.service.getAllInventory(this.locationId).subscribe((data) => {
    console.log(data);
    this.inventoryList = data;
  });
}


  //Form variables
  //Think as this as your useState
  newinventoryItem= new FormGroup({
    name: new FormControl ('', Validators.required),
    category: new FormControl ("", Validators.required),
    description: new FormControl (""),
  })



  addNewinventory(){
    // console.warn(this.newinventoryItem.value)


    // create our new item
    var newItem: Inventory={
        name: this.newinventoryItem.value.name!,
        icon: "",
        description: this.newinventoryItem.value.description!,
        amount: 10, 
        locationId: 1,
    }

    this.inventoryList.push(newItem);

    //resets imputs values
    this.newinventoryItem.reset()
  }
}


