import { Component } from '@angular/core';
import { Inventory } from '../../models/inventory.model';
import { CommonModule } from '@angular/common';
import { InventoryItemComponent } from '../cards/inventory-item/inventory-item.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, InventoryItemComponent, ReactiveFormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {

  // we are injecting our service fuctonality into this 
  constructor(private service: InventoryService){}

  //an example of an arry, but spesifying that the objects should follow the inventory model
  // dummy data
  inventoryList: Inventory[] = [
    {
    id: 1,
    name: "Jacket",
    icon: "assets/jacket.png",
    description: "View jacket inventory",
    
    },
    {
      id: 2,
      name: "Toy",
      icon: "assets/toy.jpg",
      description: "View toy inventory",
    },
    {
      id: 3,
      name: "Collar",
      icon: "assets/collar.jpg",
      description: "View collar inventory",
      },
  ]

  ngOnInit(){
    this.service.getAllInventory().subscribe((data)=>{
      console.log(data)
      this.inventoryList = data
    })
  }

  //Form variables
  //Think as this as your useState
  newInventoryItem= new FormGroup({
    name: new FormControl ('', Validators.required),
    category: new FormControl ("", Validators.required),
    description: new FormControl (""),
  })



  addNewInventory(){
    // console.warn(this.newInventoryItem.value)


    // create our new item
    var newItem: Inventory={
        name: this.newInventoryItem.value.name!,
        icon: "assets/python.png",
        description: this.newInventoryItem.value.description!
    }

    this.inventoryList.push(newItem);

    //resets imputs values
    this.newInventoryItem.reset()
  }
}