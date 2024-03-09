import { Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { landing } from '../../../models/inventory.model';
import { landingService } from '../../../services/inventory.service';

@Component({
  selector: 'app-landing-item',
  standalone: true,
  imports: [MatCardModule, ],
  templateUrl: './inventory-item.component.html',
  styleUrl: './inventory-item.component.css'
})
export class landingItemComponent {


  constructor(private service: landingService){}

  //Behvior and varibales
  @Input() item:landing = { 
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

   this.service.updatelandingAmount(this.item.id!, this.tempUpdateValue)
      .subscribe((newItem) => {
    //success
   })
  }


}
