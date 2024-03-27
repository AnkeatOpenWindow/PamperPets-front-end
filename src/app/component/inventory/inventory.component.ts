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
export class inventoryComponent {

  // we are injecting our service fuctonality into this 
  constructor(private service: InventoryService){}

  //an example of an arry, but spesifying that the objects should follow the inventory model
  // dummy data
  inventoryList: Inventory[] = [
    {
    id: 1,
    name: "Cotten",
    icon: "assets/cotton.jpg",
    description: "Make the web pretty",
    amount: 4, 
    
    },
    {
      id: 2,
      name: "Plastic",
      icon: "assets/plastic.jpg",
      description: "Test",
      amount: 10, 
    },
    {
      id: 3,
      name: "Embrodery",
      icon: "assets/embrodery.jpg",
      description: "Test",
      amount: 4, 
    },
    {
      id: 4,
      name: "Dog Tag",
      icon: "assets/tag.jpg",
      description: "Test",
      amount: 4, 
    },
      
  ]
//
  
ngOnInit(){
  this.service.getAllInventory().subscribe((data)=>{
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
    var newItem: Inventory={
        name: this.newinventoryItem.value.name!,
        icon: "",
        description: this.newinventoryItem.value.description!,
        amount: 10, 
    }

    this.inventoryList.push(newItem);

    //resets imputs values
    this.newinventoryItem.reset()
  }
}

