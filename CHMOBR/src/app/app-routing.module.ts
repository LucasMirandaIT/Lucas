import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DefaultGuard } from './shared/auth/guards/default.guard';
import { NotFoundComponent } from './commom/404/404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { MonkeyPlayComponent } from './components/monkey-play/monkey-play.component';
import { MonkeyMonitoringComponent } from './components/monkey-monitoring/monkey-monitoring.component';
import { MonkeyPanelComponent } from './components/monkey-panel/monkey-panel.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { title: 'Services Monitor' } },
  // { path: '', component: HomeComponent, data: { title: 'Services Monitor' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login Component' } },
  { path: 'monkeyPlay', component: MonkeyPlayComponent, canActivate: [AuthGuard], data: { title: 'Execução de Macacos' } },
  { path: 'monkeyMonitoring', component: MonkeyMonitoringComponent, canActivate: [AuthGuard], data: { title: 'Monitoração de Macacos' } },
  { path: 'monkeyPanel', component: MonkeyPanelComponent, canActivate: [AuthGuard], data: { title: 'Painel de Execuções' } },
  { path: 'acessonegado', component: NotFoundComponent, canActivate: [AuthGuard], data: { title: 'Services Monitor - 404' } },
  {path: '**', component: NotFoundComponent, data: {title: 'Services Monitor - 404'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
