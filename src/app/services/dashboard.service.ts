import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dashboard } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class dashboardService {
  updatedashboardAmount: any;

  // add httpClient functionality to this service
  constructor(private http: HttpClient) { }

  private baseURL="http://localhost:3000/dashboard"

  // get all inventory items
  getAllinventory(): Observable<dashboard[]>{
    return this.http.get<dashboard[]>(this.baseURL)
  }

  // update invotry item
  updateinventoryAmount(id: number, newAmount: number)
  : Observable<dashboard>  {

    return this.http.put<dashboard>(`${this.baseURL}/${id}`, {amount:newAmount})
  }


}