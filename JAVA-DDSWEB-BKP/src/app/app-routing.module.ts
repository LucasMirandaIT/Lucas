// angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// services
import { AuthMBSGuard } from 'angl-spawebbgrl/guards-module/guards/authMBS.guard';

// components
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { IbpfSelectionComponent } from './channels/ibpf/public-selection/ibpf-selection.component';
import { IbpjSelectionComponent } from './channels/ibpj/public-selection/ibpj-selection.component';
import { DdsHomeArticleComponent } from './commom/dds-home-article/dds-home-article.component';
import { IbpfAmbientMonitoringComponent } from './channels/ibpf/ambients/ibpf-ambient-monitoring/ibpf-ambient-monitoring.component';
import { IbpjAmbientMonitoringComponent } from './channels/ibpj/ambients/ibpj-ambient-monitoring/ibpj-ambient-monitoring.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { DdsLoginComponent } from './commom/dds-login/dds-login.component';
import { DdsNoAccessComponent } from './commom/dds-no-access/dds-no-access.component';


const routes: Routes = [
  {path: 'login', component: DdsLoginComponent},
  {path: 'no-access', component: DdsNoAccessComponent},
  {
    path: '',
    component: RootComponent, canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: HomeComponent, canActivate: [AuthGuardService],
      },
      {
        path: 'ibpf/public-selection',
        component: IbpfSelectionComponent, canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'IBPF - Seleção de Público'
        },
      },
      {
        path: 'ibe/public-selection',
        component: IbpjSelectionComponent, canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'IBE - Seleção de Público'
        },
      },
      {
        path: 'ibpf/ambients-monitoring',
        component: IbpfAmbientMonitoringComponent, canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'IBPF - Gestão dos Módulos'
        },
      },
      {
        path: 'ibe/ambients-monitoring',
        component: IbpjAmbientMonitoringComponent, canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'IBE - Gestão dos Módulos'
        },
      },
      {
        path: 'no-access',
        component: DdsNoAccessComponent, canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Sem Acesso'
        },
      },
      // {
      //   path: 'dashboards',
      //   component: DdsHomeArticleComponent, canActivate: [AuthGuardService],
      //   data: {
      //     breadcrumb: 'Petições para Você'
      //   },
      // },
    ]
  },
];


/*
const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      //{ path: '**', component: PageNotFoundComponent },
      {
        path: 'ibpj',
        component: PublicSelectionComponent,
        // canActivate: [ AuthMBSGuard ],
        // canActivate:[AuthGuardService],
        data: {
          breadcrumb: 'IBE'
        },
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
*/

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
