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
    { options: ['Seleção de Público', 'Configurações'] },
    { options: ['Seleção de Público', 'Configurações'] },
    { options: ['Seleção de Público', 'Configurações'] },
    { options: ['Seleção de Público', 'Configurações'] },
    { options: ['Seleção de Público', 'Configurações'] },
    { options: ['Seleção de Público', 'Configurações'] },
  ];
  headerIconLevelTwo: any = ['keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right'];
  body: any = [
    { options: [
      { subOptions: ['Busca por CPF', 'Carga de Arquivo', 'Grupos Salvos'] },
      { subOptions: ['Gerenciamento de Módulos', 'Parametrização de Módulos', 'Logs'] },
    ]},
    { options: [
      { subOptions: ['Busca por CNPJ', 'Busca por Categoria', 'Carga de Arquivo', 'Grupos Salvos'] },
      { subOptions: ['Gerenciamento de Módulos', 'Parametrização de Módulos', 'Logs'] },      
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Gerenciamento de Módulos', 'Parametrização de Módulos', 'Logs'] }, 
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Gerenciamento de Módulos', 'Parametrização de Módulos', 'Logs'] }, 
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Gerenciamento de Módulos', 'Parametrização de Módulos', 'Logs'] }, 
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Gerenciamento de Módulos', 'Parametrização de Módulos', 'Logs'] }, 
    ]},
  ];
  routers: any = [
    { options: [
      { subOptions: ['cnpj-search', 'import-search', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },
    ]},
    { options: [
      { subOptions: ['cnpj-search', 'category-search', 'import-search', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },      
    ]},
    { options: [
      { subOptions: ['modules-settings'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },            
    ]},
    { options: [
      { subOptions: ['modules-settings'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },            
    ]},
    { options: [
      { subOptions: ['modules-settings'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },            
    ]},
    { options: [
      { subOptions: ['modules-settings'] },
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
    console.log(route);
    this.router.navigate(['/', route], {queryParams : {channelTitle: this.headerLevelOne[channel]}});
  }

  abrir (){
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }
}
