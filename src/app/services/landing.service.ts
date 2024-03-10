import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { landing } from '../models/landing.model';

@Injectable({
  providedIn: 'root'
})
export class landingService {

  // add httpClient functionality to this service
  constructor(private http: HttpClient) { }

  private baseURL="http://localhost:3000/landing"

  // get all inventory items
  getAllinventory(): Observable<landing[]>{
    return this.http.get<landing[]>(this.baseURL)
  }

  // update invotry item
  updateinventoryAmount(id: number, newAmount: number)
  : Observable<landing>  {

    return this.http.put<landing>(`${this.baseURL}/${id}`, {amount:newAmount})
  }


}