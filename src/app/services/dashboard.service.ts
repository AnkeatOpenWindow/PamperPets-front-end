import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  //updatedashboardAmount: any;

  // add httpClient functionality to this service
  constructor(private http: HttpClient) { }

  private baseURL="http://localhost:3000/location"

  // get all dashboard items
  getAllDashboard(): Observable<Dashboard[]>{
    return this.http.get<Dashboard[]>(this.baseURL)
  }

  // update invotry item
  //updatedashboardAmount(id: number, newAmount: number)
  //: Observable<Dashboard>  {

    //return this.http.put<Dashboard>(`${this.baseURL}/${id}`, {amount:newAmount})
 // }


}