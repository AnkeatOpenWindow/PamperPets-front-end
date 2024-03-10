import { Component } from '@angular/core';
import { dashboard } from '../../models/dashboard.model';
import { CommonModule } from '@angular/common';
import { dashboardService } from '../../services/dashboard.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { InventoryItemComponent } from "../cards/inventory-item/inventory-item.component";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [InventoryItemComponent]
})
export class DashboardComponent {

  constructor(private service: dashboardService){}

  //an example of an arry, but spesifying that the objects should follow the inventory model
  // dummy data
  inventoryList: dashboard[] = [
    {
    id: 1,
    name: "Pretoria",
    icon: "assets/OW.jpg",
    description: "1297 John Vorster Dr, Southdowns, Centurion, 0169",
    
    },
    {
      id: 2,
      name: "Cape Town",
      icon: "assets/OW.jpg",
      description: "16 Kloof Nek Rd, Gardens, Cape Town, 8001",
    },
    {
      id: 3,
      name: "Johannesburg",
      icon: "assets/OW.jpg",
      description: "Corner Kingsway, University Rd, Johannesburg, 2092",
      },
  ]

  ngOnInit(){
    this.service.getAllinventory().subscribe((data)=>{
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
    var newItem: dashboard={
        name: this.newinventoryItem.value.name!,
        icon: "",
        description: this.newinventoryItem.value.description!
    }

    this.inventoryList.push(newItem);

    //resets imputs values
    this.newinventoryItem.reset()
  }

}

