import { SavedGroupsComponent } from './public-selection/commom/saved-groups/saved-groups.component';
import { PreviousTestersComponent } from './modules-monitoring/previous-testers/previous-testers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './services/guard/auth-guard.service';

import { HomeComponent } from './home/home.component';
import { RootComponent } from './commom/root/root.component';
import { ImportSearchComponent } from './public-selection/commom/import-search/import-search.component';
import { DashboardsComponent } from './modules-monitoring/dashboards/dashboards.component';
import { ModulesTurnComponent } from './public-selection/commom/modules-turn/modules-turn.component';
import { ModulesSettingsComponent } from './public-selection/commom/modules-settings/modules-settings.component';
import { GeneralLogsComponent } from './commom/general-logs/general-logs.component';
import { DashModulesMonitoringComponent } from './modules-monitoring/dash-modules-monitoring/dash-modules-monitoring.component';
import { CnpjSearchComponent } from './public-selection/IBPJ/create-selection/cnpj-search/cnpj-search.component';
import { CreateSelectionComponent } from './public-selection/IBPJ/create-selection/create-selection.component';
import { CreateSelection2Component } from './public-selection/IBPJ/create-selection2/create-selection2.component';
import { AuthMBSGuard } from 'angl-spawebbgrl/guards-module/guards/authMBS.guard';
import { PageNotFoundComponent } from './commom/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      //{ path: '**', component: PageNotFoundComponent },
      {
        path: 'create-selection2',
        component: CreateSelectionComponent,
        canActivate: [ AuthMBSGuard ],
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'Criar Seleção de Público'
        },
      },
      {
        path: 'create-selection',
        component: CreateSelection2Component,
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'Criar Seleção de Público'
        },
      },
      {
        path: 'cnpj-search',
        component: CnpjSearchComponent,
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'Seleção por Agência e Conta'
        },
      },
      {
        path: 'import-search',
        component: ImportSearchComponent,
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'Seleção por Carga de Arquivo'
        },
      },
      {
        path: 'dashboards',
        component: DashboardsComponent,
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'Dashboards'
        }
      },
      {
        path: 'dash-modules-monitoring',
        component: DashModulesMonitoringComponent,
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'Dashboards'
        }
      },
      {
        path: 'modules-settings',
        component: ModulesSettingsComponent,
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'Parametrização dos Módulos'
        }
      },
      {
        path: 'modules-turn',
        component: ModulesTurnComponent,
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'Gerenciamento dos Módulos'
        }
      },
      {
        path: 'previous-testers',
        component: PreviousTestersComponent,
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'Testes Realizados'
        }
      },
      {
        path: 'saved-groups',
        component: SavedGroupsComponent,
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'Grupos Salvos'
        }
      },
      {
        path: 'general-logs',
        component: GeneralLogsComponent,
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'Log Geral da Aplicação'
        }
      },     
      {
        path: '',
        component: HomeComponent
      },
      // { 
      //   path: '', 
      //   redirectTo: 'guard-fortress', 
      //   pathMatch: 'full' 
      // }, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
