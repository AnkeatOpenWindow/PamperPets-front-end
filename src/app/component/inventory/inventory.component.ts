import { Component } from '@angular/core';
import { landing } from '../../models/inventory.model';
import { CommonModule } from '@angular/common';
import { landingItemComponent } from '../cards/inventory-item/inventory-item.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { landingService } from '../../services/inventory.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, landingItemComponent, ReactiveFormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class landingComponent {

  // we are injecting our service fuctonality into this 
  constructor(private service: landingService){}

  //an example of an arry, but spesifying that the objects should follow the landing model
  // dummy data
  landingList: landing[] = [
    {
    id: 1,
    name: "Jacket",
    icon: "assets/jacket.png",
    description: "View jacket landing",
    
    },
    {
      id: 2,
      name: "Toy",
      icon: "assets/toy.jpg",
      description: "View toy landing",
    },
    {
      id: 3,
      name: "Collar",
      icon: "assets/collar.jpg",
      description: "View collar landing",
      },
  ]

  ngOnInit(){
    this.service.getAlllanding().subscribe((data)=>{
      console.log(data)
      this.landingList = data
    })
  }

  //Form variables
  //Think as this as your useState
  newlandingItem= new FormGroup({
    name: new FormControl ('', Validators.required),
    category: new FormControl ("", Validators.required),
    description: new FormControl (""),
  })



  addNewlanding(){
    // console.warn(this.newlandingItem.value)


    // create our new item
    var newItem: landing={
        name: this.newlandingItem.value.name!,
        icon: "assets/python.png",
        description: this.newlandingItem.value.description!
    }

    this.landingList.push(newItem);

    //resets imputs values
    this.newlandingItem.reset()
  }
}
