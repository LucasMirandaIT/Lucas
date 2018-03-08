import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { FooterComponent } from './footer/footer.component';
import { AlteracaoComponent } from './funcionalidades/alteracao/alteracao.component';
import { SelecaoComponent } from './funcionalidades/selecao/selecao.component';
import { MetodoAcessoSelecaoComponent } from './funcionalidades/selecao/metodo-acesso-selecao/metodo-acesso-selecao.component';
import { MetodoAcessoAlteracaoComponent } from './funcionalidades/alteracao/metodo-acesso-alteracao/metodo-acesso-alteracao.component';
import { PreloaderComponent } from './preloader/preloader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    AlteracaoComponent,
    SelecaoComponent,
    MetodoAcessoSelecaoComponent,
    MetodoAcessoAlteracaoComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
