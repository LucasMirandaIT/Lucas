import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserAuth } from '../dds-login/auth/userAuth.model';
import { AuthGuardService } from '../../shared/guards/auth-guard.service';

@Component({
  selector: 'dds-sidenav',
  templateUrl: 'dds-sidenav.component.html',
  styleUrls: ['dds-sidenav.component.scss'],
})
export class DdsSidenavComponent implements OnInit {

  userAuth: UserAuth = new UserAuth();
  showFiller = false;
  mode = new FormControl('over');
  bal: any;
  @Output() hideToggle: EventEmitter<any> = new EventEmitter();

  constructor (public authGuardService: AuthGuardService) {}

  ngOnInit() {
    this.authGuardService.userLogado.subscribe(
      retorno => {
        this.userAuth = retorno;
      }
    );
    this.userAuth = JSON.parse(sessionStorage.getItem('Item 1'));
  }

  mouseEnter() {
    this.onDestroy();
    setTimeout(() => {
      this.hideToggle.emit(false);
    }, 150);
    this.showFiller = true;
  }

  mouseLeave() {
    this.hideToggle.emit(true);
    this.bal = setTimeout(() => {
      this.showFiller = false;
    }, 200);
  }

  onDestroy() {
    clearTimeout(this.bal);
  }

}
