import { Component } from '@angular/core';
import { inventory } from '../../models/inventory.model';
import { CommonModule } from '@angular/common';
import { InventoryItemComponent } from '../cards/inventory-item/inventory-item.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { inventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, InventoryItemComponent, ReactiveFormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class inventoryComponent {

  // we are injecting our service fuctonality into this 
  constructor(private service: inventoryService){}

  //an example of an arry, but spesifying that the objects should follow the inventory model
  // dummy data
  inventoryList: inventory[] = [
    {
    id: 1,
    name: "Jacket",
    icon: "assets/jacket.png",
    description: "Quantity: 10",
    
    },
    {
      id: 2,
      name: "Toy",
      icon: "assets/toy.jpg",
      description: "Quantity: 10",
    },
    {
      id: 3,
      name: "Collar",
      icon: "assets/collar.jpg",
      description: "Quantity: 10",
      },
  ]

  ngOnInit(){
    this.service.getAllinventory().subscribe((data)=>{
      console.log(data)
      this.inventoryList = data
    })
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
    var newItem: inventory={
        name: this.newinventoryItem.value.name!,
        icon: "",
        description: this.newinventoryItem.value.description!
    }

    this.inventoryList.push(newItem);

    //resets imputs values
    this.newinventoryItem.reset()
  }
}

