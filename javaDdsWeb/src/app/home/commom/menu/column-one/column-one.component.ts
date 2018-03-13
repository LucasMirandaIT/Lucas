import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-column-one',
  templateUrl: './column-one.component.html',
  styleUrls: ['./column-one.component.css']
})
export class ColumnOneComponent implements OnInit {
  
  @Input() navBar: boolean = false;

  header: any = "Gestão de Canais";
  headerIcon: any = "group";
  headerLevelOne: any = ['IBPF', 'IBPJ', 'Novo Front', 'Mobile PF', 'Mobile PJ', 'Way'];
  // headerIconLevelOne: any = ['../../assets/img/IBPF.png', '../../assets/img/IBPJ.png', '../../assets/img/NovoFront.png', '../../assets/img/MobilePF.png', '../../assets/img/MobilePJ.png', '../../assets/img/Way.png'];
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
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos'] },
    ]},
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
      { subOptions: ['Gestão dos Módulos', 'Parametrização dos Módulos'] },
    ]},
  ];
  routers: any = [
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings'] },
    ]},
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings'] },    
    ]},
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings'] },          
    ]},
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings'] },          
    ]},
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings'] },          
    ]},
    { options: [
      { subOptions: ['create-selection', 'saved-groups'] },
      { subOptions: ['modules-turn', 'modules-settings'] },          
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
