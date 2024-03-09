import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inventory } from '../models/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class inventoryService {

  // add httpClient functionality to this service
  constructor(private http: HttpClient) { }

  private baseURL="http://localhost:3000/inventory"

  // get all inventory items
  getAllinventory(): Observable<inventory[]>{
    return this.http.get<inventory[]>(this.baseURL)
  }

  // update invotry item
  updateinventoryAmount(id: number, newAmount: number)
  : Observable<inventory>  {

    return this.http.put<inventory>(`${this.baseURL}/${id}`, {amount:newAmount})
  }


}