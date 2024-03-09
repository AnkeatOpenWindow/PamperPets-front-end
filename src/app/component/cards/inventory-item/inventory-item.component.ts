import { Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Inventory } from '../../../models/inventory.model';
import { InventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-inventory-item',
  standalone: true,
  imports: [MatCardModule, ],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.css'
})
export class InventoryItemComponent {


  constructor(private service: InventoryService){}

  //Behvior and varibales
  @Input() item:Inventory = { 
    id: 0, 
    name:"Dummy", 
    category:"Nah",
    description: "Dummy data",
    icon: "assets/pyton.png",
    amount: 0,
  }

  tempUpdateValue = 0

  // getting the updated amount we want
  updateAmount(e:any){
    this.tempUpdateValue = parseInt (e.target.value) 
  }
     
  saveAmount(){
   //TODO:

   this.service.updateInventoryAmount(this.item.id!, this.tempUpdateValue)
      .subscribe((newItem) => {
    //success
    this.item.amount = newItem.amount
   })
  }


}
