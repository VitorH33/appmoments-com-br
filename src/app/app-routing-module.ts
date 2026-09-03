import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Cadastro } from './componentes/cadastro/cadastro';
import { Login } from './componentes/login/login';
import { Meuseventos } from './componentes/meuseventos/meuseventos';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'login', component : Login},
  {path: 'signup', component: Cadastro},
  {path: 'myevents', component: Meuseventos}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
