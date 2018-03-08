import { Router } from '@angular/router/';
import { AuthService } from './../login/auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

constructor(private authService: AuthService,
  private router: Router) {}

canActivate(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  if (this.authService.getUsuarioEstaLogado() == true) {
    // this.router.navigate(['/'])
    return true;
  } else {
    this.router.navigate(['/login'])
    return false;
  }
}



}
