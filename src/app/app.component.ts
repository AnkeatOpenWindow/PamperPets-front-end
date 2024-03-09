import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { inventoryComponent } from './component/inventory/inventory.component';
import { PagenotfountComponent } from './component/pagenotfount/pagenotfount.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


//1. @Component decorator all our componet files
@Component({
  selector: 'app-root',// what we call the component in html<>
  standalone: true,// render html
  imports: [RouterOutlet, RouterLink, RouterLinkActive, PagenotfountComponent, MatToolbarModule, MatButtonModule, MatIconModule],// import components
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // add all our
  title = 'world';
}
