import { Usuario } from './models/usuario.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListarComponent } from './components/cliente-listar/cliente-listar.component';
import { ClienteCadastrarComponent } from './components/cliente-cadastrar/cliente-cadastrar.component';
import { ServicoCadastrarComponent } from './components/servico-cadastrar/servico-cadastrar.component';
import { ServicoListarComponent } from './components/servico-listar/servico-listar.component';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { PropostaComponent } from './components/proposta/proposta.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsuariosListarComponent } from './components/usuarios/usuarios-listar.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'home', component: MenuInicialComponent, canActivate: [AuthGuard] },

  { path: 'clientes/listar', component: ClienteListarComponent, canActivate: [AuthGuard] },
  { path: 'clientes/cadastrar', component: ClienteCadastrarComponent, canActivate: [AuthGuard] },

  { path: 'usuarios', component: UsuariosListarComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },  
  { path: 'servicos/cadastrar', component: ServicoCadastrarComponent, canActivate: [AuthGuard] },
  { path: 'servicos/listar', component: ServicoListarComponent, canActivate: [AuthGuard] },

  { path: 'proposta/:id', component: PropostaComponent, canActivate: [AuthGuard] },

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
