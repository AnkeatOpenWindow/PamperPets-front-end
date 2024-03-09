import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  // add httpClient functionality to this service
  constructor(private http: HttpClient) { }

  private baseURL="http://localhost:3000/inventory"

  // get all inventory items
  getAllInventory(): Observable<Inventory[]>{
    return this.http.get<Inventory[]>(this.baseURL)
  }

  // update invotry item
  updateInventoryAmount(id: number, newAmount: number)
  : Observable<Inventory>  {

    return this.http.put<Inventory>(`${this.baseURL}/${id}`, {amount:newAmount})
  }


}