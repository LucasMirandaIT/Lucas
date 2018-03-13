import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-column-one',
  templateUrl: './column-one.component.html',
  styleUrls: ['./column-one.component.css']
})
export class ColumnOneComponent implements OnInit, OnDestroy {
  
  @Input() navBar: boolean = false;

  header: any = "Gestão de Canais";
  headerIcon: any = "group";
  headerLevelOne: any = ['IBPF', 'IBPJ', 'Novo Front', 'Mobile PF', 'Mobile PJ', 'Way'];
  headerIconLevelOne: any = ['keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right'];
  headerLevelTwo: any = [
    { options: ['Seleção de Público', 'Configurações dos Módulos'] },
    { options: ['Seleção de Público', 'Configurações dos Módulos'] },
    { options: ['Seleção de Público', 'Configurações dos Módulos'] },
    { options: ['Seleção de Público', 'Configurações dos Módulos'] },
    { options: ['Seleção de Público', 'Configurações dos Módulos'] },
    { options: ['Seleção de Público', 'Configurações dos Módulos'] },
  ];
  headerIconLevelTwo: any = ['keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right'];
  body: any = [
    { options: [
      { subOptions: ['Criar Seleção', 'Visualizar/ Editar Seleção'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos'] },
    ]},
    { options: [
      { subOptions: ['Criar Seleção', 'Visualizar/ Editar Seleção'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos'] },    
    ]},
    { options: [
      { subOptions: ['Criar Seleção', 'Visualizar/ Editar Seleção'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos', 'Logs'] },
    ]},
    { options: [
      { subOptions: ['Criar Seleção', 'Visualizar/ Editar Seleção'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos', 'Logs'] },
    ]},
    { options: [
      { subOptions: ['Criar Seleção', 'Visualizar/ Editar Seleção'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos', 'Logs'] },
    ]},
    { options: [
      { subOptions: ['Criar Seleção', 'Visualizar/ Editar Seleção'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos', 'Logs'] },
    ]},
  ];
  routers: any = [
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },
    ]},
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },    
    ]},
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },          
    ]},
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },          
    ]},
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },          
    ]},
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },          
    ]},

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
    this.router.navigate(['/', route], {queryParams : {channelTitle: this.headerLevelOne[channel]}});
  }

  abrir (){
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }
}
