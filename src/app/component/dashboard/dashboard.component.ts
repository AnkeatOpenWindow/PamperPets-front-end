import { Component } from '@angular/core';
import { Dashboard } from '../../models/dashboard.model';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DashboardItemComponent } from '../card/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardItemComponent, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  
})
export class DashboardComponent {

  constructor(private service: DashboardService) { }

  //an example of an arry, but spesifying that the objects should follow the dashboard model
  // dummy data
  dashboardList: Dashboard[] = [
    {
      id: 1,
      name: "Pretoria",
      icon: "assets/OW.jpg",
      adress: "1297 John Vorster Dr, Southdowns, Centurion, 0169",

    },
    {
      id: 2,
      name: "Cape Town",
      icon: "assets/OW.jpg",
      adress: "16 Kloof Nek Rd, Gardens, Cape Town, 8001",
    },
    {
      id: 3,
      name: "Johannesburg",
      icon: "assets/OW.jpg",
      adress: "Corner Kingsway, University Rd, Johannesburg, 2092",
    },
  ]

  ngOnInit() {
    this.service.getAllDashboard().subscribe((data) => {
      console.log(data)
      this.dashboardList = data
    })
  }

  //Form variables
  //Think as this as your useState
  newdashboardItem = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl("", Validators.required),
    description: new FormControl(""),
  })



  addNewdashboard() {
    // console.warn(this.newdashboardItem.value)


    // create our new item
    var newItem: Dashboard = {
      name: this.newdashboardItem.value.name!,
      icon: "",
      adress: this.newdashboardItem.value.description!
    }

    this.dashboardList.push(newItem);

    //resets imputs values
    this.newdashboardItem.reset()
  }

}

