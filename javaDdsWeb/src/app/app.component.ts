import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  mode = new FormControl('over');
  private show: boolean = false;
  panelOpenState: boolean = false;

  showSideNav() {
    this.show = !this.show;
  }

}
