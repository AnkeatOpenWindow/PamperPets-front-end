import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: AuthService, private router: Router){}

  login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit(){
    // Validation
    if(this.login.value.username != "" && this.login.value.password != ""){

      //TODO: Call Auth Service
      this.service.logInUser(this.login.value.username!, this.login.value.password!)
      .subscribe((success) =>{
        //if login successfull, navigate to inventory
        if(success){
          this.router.navigateByUrl("/landing");
        }else {
          console.log("Add validation")
        }
      })
    }
  }
}
