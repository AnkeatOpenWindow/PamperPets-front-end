import { Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Dashboard } from '../../../models/dashboard.model';
import { DashboardService } from '../../../services/dashboard.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [MatCardModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {

  constructor(private service: DashboardService){}

  //Behvior and varibales
  @Input() item:Dashboard = { 
    id: 0, 
    name:"Dummy", 
    adress: "Dummy data",
    icon: "assets/toy.jpg",
  }

  tempUpdateValue = 0

  // getting the updated amount we want
  updateAmount(e:any){
    this.tempUpdateValue = parseInt (e.target.value) 
  }
     
  //saveAmount(){
   //TODO:

   //this.service.updatedashboardAmount(this.item.id!, this.tempUpdateValue)
     // .subscribe((newItem: any) => {
    //success
   //})
  //}


}
