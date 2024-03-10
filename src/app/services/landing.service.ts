import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Landing } from '../models/landing.model';

@Injectable({
  providedIn: 'root'
})
export class landingService {

  // add httpClient functionality to this service
  constructor(private http: HttpClient) { }

  private baseURL="http://localhost:3000/landing"

  // get all landing items
  getAlllanding(): Observable<Landing[]>{
    return this.http.get<Landing[]>(this.baseURL)
  }

  // update landing item
  updatelandingAmount(id: number, newAmount: number)
  : Observable<Landing>  {

    return this.http.put<Landing>(`${this.baseURL}/${id}`, {amount:newAmount})
  }


}