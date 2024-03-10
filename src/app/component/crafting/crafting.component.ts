import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Crafting } from '../../models/crafting.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crafting',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './crafting.component.html',
  styleUrl: './crafting.component.css'
})
export class CraftingComponent {
  displayedColumns = ['item', 'color', 'available', 'needed'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  //need to figure out how to add a drop down to item and color for material and color
  item: string;
  color: string;
  available: string;
  needed: string;
}

const ELEMENT_DATA: Element[] = [
  {item: 'Material', color: 'Red, Blue, Purple', available: '20 m', needed: '5 m'},
  {item: 'Embroidery', color: 'White, Black', available: '20', needed: '1'},
];
