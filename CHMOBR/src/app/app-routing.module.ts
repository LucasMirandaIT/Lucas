import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DefaultGuard } from './shared/auth/guards/default.guard';
import { NotFoundComponent } from './commom/404/404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { MonkeyPlayComponent } from './components/monkey-play/monkey-play.component';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';


const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuardService], redirectTo: LoginComponent,data: { title: 'Services Monitor' } },
  { path: '', component: HomeComponent, data: { title: 'Services Monitor' } },
  { path: 'monkeyPlay', component: MonkeyPlayComponent, data: { title: 'Login' } },
  { path: 'acessonegado', component: NotFoundComponent, data: { title: 'Services Monitor - 404' } },
  {path: '**', component: NotFoundComponent, data: {title: 'Services Monitor - 404'}},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
