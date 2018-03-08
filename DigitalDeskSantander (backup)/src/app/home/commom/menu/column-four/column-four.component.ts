import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-column-four',
  templateUrl: './column-four.component.html',
  styleUrls: ['./column-four.component.css']
})
export class ColumnFourComponent implements OnInit, OnDestroy {
  
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
      { subOptions: ['Alteração de Modulos', 'Log', 'Configuração de Módulos'] },
    ]},
    { options: [
      { subOptions: ['Busca por CNPJ', 'Busca por Categoria', 'Carga de Arquivo',  'Filtros Pré-Definidos', 'Testes Ativos'] },
      { subOptions: ['Alteração de Modulos', 'Log', 'Configuração de Módulos'] },      
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Alteração de Modulos', 'Log', 'Configuração de Módulos'] }, 
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Alteração de Modulos', 'Log', 'Configuração de Módulos'] }, 
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Alteração de Modulos', 'Log', 'Configuração de Módulos'] }, 
    ]},
    { options: [
      { subOptions: ['Body'] },
      { subOptions: ['Alteração de Modulos', 'Log', 'Configuração de Módulos'] }, 
    ]},
  ];
  routers: any = [
    { options: [
      { subOptions: ['cnpj-search', 'import-search', 'saved-filters', 'active-tests'] },
      { subOptions: ['modules-turn', 'channel-logs', 'modules-settings'] },
    ]},
    { options: [
      { subOptions: ['cnpj-search', 'category-search', 'import-search', 'predefined-filters', 'modules-settings', 'active-tests'] },
      { subOptions: ['cnpj-search', 'import-search', 'saved-filters'] },      
    ]},
    { options: [
      { subOptions: ['modules-settings'] },
    ]},
    { options: [
      { subOptions: ['modules-settings'] },
    ]},
    { options: [
      { subOptions: ['modules-settings'] },
    ]},
    { options: [
      { subOptions: ['modules-settings'] },
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
