import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private isLoggedIn = new BehaviorSubject<boolean>(false);

  private loginUrl = "http://localhost:3000/users/login"

  loginUser(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, { email, password }).pipe(
      tap(response => {
        if (response) {
          console.log(response)
          sessionStorage.setItem("currentUser", JSON.stringify(response))
          this.isLoggedIn.next(true)
        }
      })

    )

  }

  logout() {
    sessionStorage.removeItem("currentUser")
    this.isLoggedIn.next(false)
  }

  checkCurrentUserLoggedIn(): boolean {
    console.log("checking if logged in...")
    var user = JSON.parse(sessionStorage.getItem("currentUser")!)
    console.log(user)
    if (user) {
      this.isLoggedIn.next(true)
      return true
    } else {
      this.isLoggedIn.next(false)
      return false
    }
  }

  checkIfLoggedIn(): Observable<boolean> {
    this.checkCurrentUserLoggedIn()

    return this.isLoggedIn.asObservable()

  }

  isUserAdmin() {

    var user = JSON.parse(sessionStorage.getItem("currentUser")!)
    console.log(user)
    if (user) {
      console.log(user.isAdmin + " admin")
      if (user.isAdmin == true) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  getCurrentUser(): any {

    var user = JSON.parse(sessionStorage.getItem("currentUser")!)
    return user

  }

}

