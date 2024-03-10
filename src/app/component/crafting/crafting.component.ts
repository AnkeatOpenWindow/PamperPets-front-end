import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Crafting } from '../../models/crafting.model';

@Component({
  selector: 'app-crafting',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './crafting.component.html',
  styleUrl: './crafting.component.css'
})
export class CraftingComponent {
  
  craftingList: Crafting[] = [
    //02:17:47
  ]
}
