import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-column-three',
  templateUrl: './column-three.component.html',
  styleUrls: ['./column-three.component.css']
})
export class ColumnThreeComponent implements OnInit, OnDestroy {
  
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
      { subOptions: ['Busca por CPF', 'Carga de Arquivo',  'Filtros Pré-Definidos', 'Testes Ativos'] },
      { subOptions: ['Alteração de Modulos', 'Configuração de Módulos', 'Logs'] },
    ]},
    { options: [
      { subOptions: ['Busca por CNPJ', 'Busca por Categoria', 'Carga de Arquivo',  'Filtros Pré-Definidos', 'Testes Ativos'] },
      { subOptions: ['Alteração de Modulos', 'Configuração de Módulos', 'Logs'] },      
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Alteração de Modulos', 'Configuração de Módulos', 'Logs'] }, 
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Alteração de Modulos', 'Configuração de Módulos', 'Logs'] }, 
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Alteração de Modulos', 'Configuração de Módulos', 'Logs'] }, 
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Alteração de Modulos', 'Configuração de Módulos', 'Logs'] }, 
    ]},
  ];
  routers: any = [
    { options: [
      { subOptions: ['cnpj-search', 'import-search', 'saved-filters', 'active-tests'] },
      { subOptions: ['modules-turn', 'modules-settings', 'channel-logs'] },
    ]},
    { options: [
      { subOptions: ['cnpj-search', 'category-search', 'import-search', 'predefined-filters', 'active-tests'] },
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
    this.router.navigate(['/', route], {queryParams : {channelTitle: this.headerLevelOne[channel]}});
  }

  abrir (){
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }
}
