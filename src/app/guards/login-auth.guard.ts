
import { CanActivateFn } from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';
import { inject } from '@angular/core';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  const loginAuthService =  inject(LoginAuthService);
  
  // Check if the user is logged in using the AuthService
  if (loginAuthService.loggedIn()) {
    return true; // If logged in, allow access to the route
  } else {
    return false; // If not logged in, deny access to the route
  }
};