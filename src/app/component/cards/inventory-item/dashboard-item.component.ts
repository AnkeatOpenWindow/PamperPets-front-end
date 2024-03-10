import { Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { dashboard } from '../../../models/dashboard.model';
import { dashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class InventoryItemComponent {

  constructor(private service: dashboardService){}

  //Behvior and varibales
  @Input() item:dashboard = { 
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

   this.service.updatedashboardAmount(this.item.id!, this.tempUpdateValue)
      .subscribe((newItem: any) => {
    //success
   })
  }


}
