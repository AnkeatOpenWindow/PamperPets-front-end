import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Landing } from '../../../models/landing.model';
import { landingService } from '../../../services/landing.service';

@Component({
  selector: 'app-landingpage-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './landingpage-item.component.html',
  styleUrl: './landingpage-item.component.css'
})
export class LandingpageItemComponent {

  constructor(private service: landingService){}

  //Behvior and varibales
  @Input() item:Landing = { 
    id: 0, 
    name:"Dummy", 
    description: "Dummy data",
    icon: "assets/toy.jpg",
  }

  tempUpdateValue = 0

  // getting the updated amount we want
  //updateAmount(e:any){
    //this.tempUpdateValue = parseInt (e.target.value) 
  //}
     
  //saveAmount(){
   //TODO:

   //this.service.updatelandingAmount(this.item.id!, this.tempUpdateValue)
     // .subscribe((newItem: any) => {
    ////success
  // })
 // }


}



