import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListarComponent } from './components/cliente-listar/cliente-listar.component';
import { ClienteCadastrarComponent } from './components/cliente-cadastrar/cliente-cadastrar.component';
import { ServicoCadastrarComponent } from './components/servico-cadastrar/servico-cadastrar.component';
import { ServicoListarComponent } from './components/servico-listar/servico-listar.component';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { PropostaComponent } from './components/proposta/proposta.component';


const routes: Routes = [
  { path: '', redirectTo: 'clientes/listar', pathMatch: 'full' },
  { path: 'home', component: MenuInicialComponent },
  { path: 'clientes/listar', component: ClienteListarComponent },
  { path: 'clientes/cadastrar', component: ClienteCadastrarComponent },
  { path: 'servicos/cadastrar', component: ServicoCadastrarComponent },
  { path: 'servicos/listar', component: ServicoListarComponent },
  { path: 'proposta/:id', component: PropostaComponent },
  { path: '', redirectTo: '/orcamento', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}