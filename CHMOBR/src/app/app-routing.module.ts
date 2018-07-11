import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DefaultGuard } from './shared/auth/guards/default.guard';
import { NotFoundComponent } from './commom/404/404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './shared/login/login.component';


const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [DefaultGuard], data: { title: 'Services Monitor' } },
  { path: '', component: HomeComponent, data: { title: 'Services Monitor' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'acessonegado', component: NotFoundComponent, data: { title: 'Services Monitor - 404' } },
  {path: '**', component: NotFoundComponent, data: {title: 'Services Monitor - 404'}},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
