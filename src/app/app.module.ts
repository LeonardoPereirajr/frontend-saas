import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListarComponent } from './components/cliente-listar/cliente-listar.component';
import { ClienteCadastrarComponent } from './components/cliente-cadastrar/cliente-cadastrar.component';
import { ServicoListarComponent } from './components/servico-listar/servico-listar.component';
import { ServicoCadastrarComponent } from './components/servico-cadastrar/servico-cadastrar.component';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({ declarations: [
        AppComponent,
        ClienteListarComponent,
        ClienteCadastrarComponent,
        ServicoListarComponent,
        ServicoCadastrarComponent,
        MenuInicialComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
