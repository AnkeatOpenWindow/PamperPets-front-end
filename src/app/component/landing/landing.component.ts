import { Component } from '@angular/core';
import { Landing } from '../../models/landing.model';
import { CommonModule } from '@angular/common';
import { LandingpageItemComponent } from '../card3/landingpage-item/landingpage-item.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { landingService } from '../../services/landing.service';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, LandingpageItemComponent, ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  // we are injecting our service fuctonality into this 
  constructor(private service: landingService){}

  //an example of an arry, but spesifying that the objects should follow the landing model
  // dummy data
  landingList: Landing[] = [
    {
    id: 1,
    name: "Jacket",
    icon: "assets/jacket.png",
    description: "Pamper Pets offers a range of dog jackets branded by Dog's Life",
    
    },
    {
      id: 2,
      name: "Toy",
      icon: "assets/toy.jpg",
      description: "Pamper Pets offers a range of dog toys branded by Dog's Life",
    },
    {
      id: 3,
      name: "Collar",
      icon: "assets/collar.jpg",
      description: "Pamper Pets offers a range of dog collars branded by Dog's Life",
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
    var newItem: Landing={
        name: this.newlandingItem.value.name!,
        icon: "",
        description: this.newlandingItem.value.description!
    }

    this.landingList.push(newItem);

    //resets imputs values
    this.newlandingItem.reset()
  }
}
