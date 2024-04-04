import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from './services/auth.service';


//1. @Component decorator all our componet files
@Component({
  selector: 'app-root',// what we call the component in html<>
  standalone: true,// render html
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule],// import components
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // add all our
  title = 'world';

  constructor(private service: AuthService, private router: Router) { }

  public isLoggedIn = false

  public isAdmin = false

  ngOnInit() {

    this.checkLoginState()

  }

  checkLoginState() {
    this.service.checkIfLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn
      this.isAdmin = this.service.isUserAdmin()
      console.log("Admin" + this.isAdmin)
    })

  }

  callLogout() {
    this.service.logout()
    this.router.navigateByUrl("/login")
  }

}
