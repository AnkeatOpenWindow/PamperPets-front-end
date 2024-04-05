import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // influences our behavoir 
  private isLoggedIn = new BehaviorSubject<boolean>(false)

  //http url
  private loginUrl = "http://localhost:3000/users/login"

  //login
  logInUser(username: string, password: string): Observable<boolean> {
    //make the http request, receive the response of user info, save user info to session storage 
    return this.http.post<any>(this.loginUrl, { username, password }).pipe(
      tap(response => {
        if (response) {
          // set our sessions storage
          console.log(response)
          sessionStorage.setItem("currentUser", JSON.stringify(response))
          this.isLoggedIn.next(true)
        }
      })
    )
  }

  //logout
  logout() {
    sessionStorage.removeItem("currentUser")
    this.isLoggedIn.next(false) //set state to false
  }

  //returns this logged in user info
  checkCurrentUserLoggedIn(): boolean {
    //DIDN'T - user model = RECOMMENDED
    console.log("checking if logged in...")
    var user = JSON.parse(sessionStorage.getItem("currentUser")!)

    if (user) {
      
      this.isLoggedIn.next(true)
      return true
    } else {
      this.isLoggedIn.next(false)
      return false
    }

  }

  //check if a user is logged in -for UI
  checkIfLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable()
  }

  //chech if a user is admin
  isUserAdmin() {
    var user = JSON.parse(sessionStorage.getItem("currentUser")!);
    console.log(user);
    if (user) {
      console.log(user.isAdmin + " admin");
      if (user.isAdmin == true) {
        return true
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  // returns user data from session - for you
  getCurrentUser(): any {
    var user = JSON.parse(sessionStorage.getItem("currentUser")!)
    return user
  }
}