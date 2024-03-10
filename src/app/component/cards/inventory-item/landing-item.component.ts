import { Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { landing } from '../../../models/landing.model';
import { landingService } from '../../../services/landing.service';

@Component({
  selector: 'app-landing-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './landing-item.component.html',
  styleUrl: './landing-item.component.css'
})
export class InventoryItemComponent {

  constructor(private service: landingService){}

  //Behvior and varibales
  @Input() item:landing = { 
    id: 0, 
    name:"Dummy", 
    description: "Dummy data",
    icon: "assets/toy.jpg",
  }

  tempUpdateValue = 0

  // getting the updated amount we want
  updateAmount(e:any){
    this.tempUpdateValue = parseInt (e.target.value) 
  }
     
  saveAmount(){
   //TODO:

   this.service.updateinventoryAmount(this.item.id!, this.tempUpdateValue)
      .subscribe((newItem: any) => {
    //success
   })
  }


}
