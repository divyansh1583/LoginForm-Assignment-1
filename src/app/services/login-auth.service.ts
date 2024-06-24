
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private router: Router) { }

  loggedIn() {
    return (localStorage.getItem('login_token')) ? true : false;
  }

}