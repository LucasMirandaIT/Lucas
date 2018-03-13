import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-column-three',
  templateUrl: './column-three.component.html',
  styleUrls: ['./column-three.component.css']
})
export class ColumnThreeComponent implements OnInit {
  
  header: any = "Gestão de Canais";
  headerIcon: any = "group";
  headerLevelOne: any = ['IBPF', 'IBPJ', 'Novo Front', 'Mobile PF', 'Mobile PJ', 'Way'];
  headerIconLevelOne: any = ['keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right'];
  headerLevelTwo: any = [
    { options: ['Criar Seleção', 'Visualizar/ Editar Seleção', 'Configurações dos Módulos'] },
    { options: ['Criar Seleção', 'Visualizar/ Editar Seleção', 'Configurações dos Módulos'] },
    { options: ['Criar Seleção', 'Visualizar/ Editar Seleção', 'Configurações dos Módulos'] },
    { options: ['Criar Seleção', 'Visualizar/ Editar Seleção', 'Configurações dos Módulos'] },
    { options: ['Criar Seleção', 'Visualizar/ Editar Seleção', 'Configurações dos Módulos'] },
    { options: ['Criar Seleção', 'Visualizar/ Editar Seleção', 'Configurações dos Módulos'] },
  ];
  headerIconLevelTwo: any = ['keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right', 'keyboard_arrow_right'];
  body: any = [
    { options: [
      { subOptions: ['Por CPF', 'Por Carga de Arquivo'] },
      { subOptions: ['Por Grupo'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos'] },
    ]},
    { options: [
      { subOptions: ['Por Agência/ Conta', 'Por Carga de Arquivo'] },
      { subOptions: ['Por Grupo'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos'] },    
    ]},
    { options: [
      { subOptions: ['Por CPF', 'Por Carga de Arquivo'] },
      { subOptions: ['Por Grupo'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos'] },
    ]},
    { options: [
      { subOptions: ['Por CPF', 'Por Carga de Arquivo'] },
      { subOptions: ['Por Grupo'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos'] },
    ]},
    { options: [
      { subOptions: ['Por CPF', 'Por Carga de Arquivo'] },
      { subOptions: ['Por Grupo'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos'] },
    ]},
    { options: [
      { subOptions: ['Por CPF', 'Por Carga de Arquivo'] },
      { subOptions: ['Por Grupo'] },
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos'] },
    ]},
  ];
  routers: any = [
    { options: [
      { subOptions: ['create-selection', 'import-search'] },
      { subOptions: ['saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings',] },
    ]},
    { options: [
      { subOptions: ['create-selection', 'import-search'] },
      { subOptions: ['saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings',] },   
    ]},
    { options: [
      { subOptions: ['create-selection', 'import-search'] },
      { subOptions: ['saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings',] },         
    ]},
    { options: [
      { subOptions: ['create-selection', 'import-search'] },
      { subOptions: ['saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings',] },         
    ]},
    { options: [
      { subOptions: ['create-selection', 'import-search'] },
      { subOptions: ['saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings',] },         
    ]},
    { options: [
      { subOptions: ['create-selection', 'import-search'] },
      { subOptions: ['saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings',] },         
    ]},

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
