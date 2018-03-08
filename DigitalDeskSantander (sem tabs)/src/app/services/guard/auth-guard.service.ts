import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService : AuthService, private router : Router) { }

  canActivate (route : ActivatedRouteSnapshot, state : RouterStateSnapshot): boolean {
    if (this.authService.getLogado() == true){
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
