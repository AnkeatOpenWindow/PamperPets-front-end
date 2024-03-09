import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pagenotfound } from '../../models/pagenotfound.model';


@Component({
  selector: 'app-pagenotfount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagenotfount.component.html',
  styleUrl: './pagenotfount.component.css'
})
export class PagenotfountComponent {
  pagenotfount: Pagenotfound [] =[
    {
      id: 1,
      name: "NaP (Not A Page)",
      icon: "assets/error-404.png",
      description: "LOOKS LIKE YOU ARE LOST? try to make your navigation type safe and go back to where you came from.",
      },
  ]
}
