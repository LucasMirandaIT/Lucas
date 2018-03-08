import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-column-two',
  templateUrl: './column-two.component.html',
  styleUrls: ['./column-two.component.css']
})
export class ColumnTwoComponent implements OnInit, OnDestroy {

  @Input() navBar: boolean = false;

  header: any = "Visão Geral do Módulos";
  headerIcon: any = "dns";
  headerLevelOne: any = ['Dashboards', 'Relatórios'];
  headerIconLevelOne: any = ['keyboard_arrow_right', 'keyboard_arrow_right'];
  headerLevelTwo: any = [''];
  headerIconLevelTwo: any = ['keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right'];
  body: any = [
    { options: ['Monitoramento dos Módulos', 'Monitoramento dos Módulos 2'] },
    { options: ['Log Geral'] },
  ];
  routers: any = [
    { options: ['dashboards', 'dash-modules-monitoring'] },
    { options: ['general-logs'] },
  ];

  channel: any = [];

  constructor( private router : Router) { }

  ngOnInit() {
    $(document).ready(function(){
      $('.collapsible').collapsible();
      Materialize.updateTextFields();
    });
  }

  ngOnDestroy() {
    $(document).ready(function(){
      $('.collapsible').collapsible('destroy');
    });
  }

  goToRoute(route, channel) {
    console.log(route);
    this.router.navigate(['/', route], {queryParams : {channelTitle: this.headerLevelOne[channel]}});
  }

  abrir (){
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }
}
