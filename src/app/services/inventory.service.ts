import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  private baseURL = "http://localhost:3000/inventory";

  getAllInventory(locationId: number): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.baseURL}?locationId=${locationId}`);
  }

  updateInventoryAmount(id: number, newAmount: number): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.baseURL}/${id}`, { amount: newAmount });
  }

}