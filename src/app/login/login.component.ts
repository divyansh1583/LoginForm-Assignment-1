import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  constructor(private router:Router) { }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  });

  saveForm() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    if (email === 'test1@gmail.com' && password === '12345678') {
      localStorage.setItem('login_token', 'token');
      this.router.navigate(['pages']);
    } else {
      alert('Invalid email or password');
    }
  }
}
