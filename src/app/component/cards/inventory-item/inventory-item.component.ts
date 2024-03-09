import { Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { inventory } from '../../../models/inventory.model';
import { inventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-inventory-item',
  standalone: true,
  imports: [MatCardModule, ],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.css'
})
export class InventoryItemComponent {

  constructor(private service: inventoryService){}

  //Behvior and varibales
  @Input() item:inventory = { 
    id: 0, 
    name:"Dummy", 
    description: "Dummy data",
    icon: "assets/pyton.png",
  }

  tempUpdateValue = 0

  // getting the updated amount we want
  updateAmount(e:any){
    this.tempUpdateValue = parseInt (e.target.value) 
  }
     
  saveAmount(){
   //TODO:

   this.service.updateinventoryAmount(this.item.id!, this.tempUpdateValue)
      .subscribe((newItem) => {
    //success
   })
  }


}
