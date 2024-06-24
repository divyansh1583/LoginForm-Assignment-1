
import { CanActivateFn } from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';
import { inject } from '@angular/core';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  const loginAuthService =  inject(LoginAuthService);
  
  if (loginAuthService.loggedIn()) {
    return true; 
  } else {
    return false; 
  }
};