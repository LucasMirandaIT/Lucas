import { Injectable, Output, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userLoggedEmitter = new EventEmitter<boolean>();
  constructor(public router: Router, public authService: AuthService) { }
  
  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (this.authService.isLogged()){
      this.userLoggedEmitter.emit(true);
      return true;
    } 
  //   else {
  //     this.userLoggedEmitter.emit(false);
  //     this.router.navigate(['/login']);
  //     console.log('Login inválido');
  //   }
  // }
}
