import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  isLogged(logged) {
    if (logged === true) {
      return true;
    } else {
      return false;
    }
  }
}
