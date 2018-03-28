// angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// services
import { AuthMBSGuard } from 'angl-spawebbgrl/guards-module/guards/authMBS.guard';

// components
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { PublicSelectionComponent } from './channels/commom/public-selection/public-selection.component';
import { IbpjComponent } from './channels/ibpj/ibpj.component';

const routes: Routes = [
  {
    path: "",
    component: RootComponent,
    children: [
      {
        path: "menu1",
        component: PublicSelectionComponent,
        data: {
          breadcrumb: "Menu 1"
        }
      },
      {
        path: "menu2",
        component: PublicSelectionComponent,
        data: {
          breadcrumb: "Menu 2"
        },
        children: [
          {
            path: "menu3",
            component: PublicSelectionComponent,
            data: {
              breadcrumb: "Menu 2.1"
            }
          }
        ]
      },
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
          breadcrumb: 'IBPJ'
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
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
