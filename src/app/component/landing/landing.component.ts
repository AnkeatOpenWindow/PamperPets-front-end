import { Component } from '@angular/core';
import { inventory } from '../../models/inventory.model';
import { CommonModule } from '@angular/common';
import { InventoryItemComponent } from '../cards/inventory-item/inventory-item.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { inventoryService } from '../../services/inventory.service';
import { landing } from '../../models/landing.model';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, InventoryItemComponent, ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  // we are injecting our service fuctonality into this 
  constructor(private service: inventoryService){}

  //an example of an arry, but spesifying that the objects should follow the inventory model
  // dummy data
  landingList: landing[] = [
    {
    id: 1,
    name: "Jacket",
    icon: "assets/jacket.png",
    description: "Pamper Pets offers a range of dog jackets branded by Dog's Life",
    
    },
    {
      id: 2,
      name: "Toy",
      icon: "assets/toy.jpg",
      description: "Pamper Pets offers a range of dog toys branded by Dog's Life",
    },
    {
      id: 3,
      name: "Collar",
      icon: "assets/collar.jpg",
      description: "Pamper Pets offers a range of dog collars branded by Dog's Life",
      },
  ]

  ngOnInit(){
    this.service.getAllinventory().subscribe((data)=>{
      console.log(data)
      this.landingList = data
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

    this.landingList.push(newItem);

    //resets imputs values
    this.newinventoryItem.reset()
  }
}
