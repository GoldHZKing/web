import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-c',
  templateUrl: './sign-in-c.component.html',
  styleUrl: './sign-in-c.component.css'
})
export class SignInCComponent {
constructor(private router:Router){}

  onClickSingIn(form: NgForm) {
    console.log(form.valid);
    if (form.valid) {
      this.router.navigate(['/signUp']);
    }else{
      alert("Please Enter User Name and Password")
    }
  }
}
