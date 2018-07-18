import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DdsSidenavComponent } from '../dds-sidnav/dds-sidenav.component';
import { Router } from '@angular/router';
import { UserAuth } from '../dds-login/auth/userAuth.model';
import { AuthGuardService } from '../../shared/guards/auth-guard.service';

@Component({
  selector: 'dds-expansion-panel',
  templateUrl: './dds-expansion-panel.component.html',
  styleUrls: ['./dds-expansion-panel.component.scss']
})

export class DdsExpansionPanelComponent implements OnInit {

  hideArrow: boolean;
  @Input() side;
  @Input('column') column: string;

  userAuth: UserAuth = new UserAuth();

  constructor(public router: Router, public authGuardService: AuthGuardService, public ddsSidenav: DdsSidenavComponent) {}

  ngOnInit() {
    this.authGuardService.userLogado.subscribe(
      retorno => {
        this.userAuth = retorno;
      }
    );
    this.ddsSidenav.hideToggle.subscribe(
      retorno => {
        this.hideArrow = retorno;
      }
    );
    this.userAuth = JSON.parse(sessionStorage.getItem('Item 1'));
  }

  verifyTransation(fatherSup, fatherTS, father) {
    if (fatherSup === fatherTS && father.substring(0, 7) !== 'DDS-ABA') {
      return true;
    }
  }

  navigation(path: string) {
    if (path !== '' && path !== undefined) {
      this.router.navigate([path]);
    }
  }

}

