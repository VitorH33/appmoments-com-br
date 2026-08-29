import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Cadastro } from './componentes/cadastro/cadastro';
import { Detalheevento } from './componentes/detalheevento/detalheevento';
import { Home } from './componentes/home/home';
import { Login } from './componentes/login/login';
import { Meuseventos } from './componentes/meuseventos/meuseventos';
import { Profile } from './componentes/profile/profile';
import { Novoevento } from './componentes/novoevento/novoevento';
import { Galeria } from './componentes/galeria/galeria';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Cadastro,
    Detalheevento,
    Home,
    Login,
    Meuseventos,
    Profile,
    Novoevento,
    Galeria,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
