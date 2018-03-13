import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-column-two',
  templateUrl: './column-two.component.html',
  styleUrls: ['./column-two.component.css']
})
export class ColumnTwoComponent implements OnInit {

  @Input() navBar: boolean = false;

  header: any = "Informações";
  headerIcon: any = "dns";
  headerLevelOne: any = ['Dashboards', 'Relatórios/ Consultas'];
  headerIconLevelOne: any = ['keyboard_arrow_right', 'keyboard_arrow_right'];
  headerLevelTwo: any = [''];
  headerIconLevelTwo: any = ['keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right'];
  body: any = [
    { options: ['Monitoramento dos Módulos', 'Monitoramento dos Módulos 2'] },
    { options: ['Log do Sistema'] },
  ];
  routers: any = [
    { options: ['dashboards', 'dash-modules-monitoring'] },
    { options: ['general-logs'] },
  ];

  channel: any = [];

  constructor( private router : Router) { }

  ngOnInit() {
  }

  goToRoute(route, channel) {
    this.router.navigate(['/', route], {queryParams : {channelTitle: this.headerLevelOne[channel]}});
  }

  abrir (){
  }
}
