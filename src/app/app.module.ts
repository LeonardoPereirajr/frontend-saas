import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListarComponent } from './components/cliente-listar/cliente-listar.component';
import { ClienteCadastrarComponent } from './components/cliente-cadastrar/cliente-cadastrar.component';
import { ServicoListarComponent } from './components/servico-listar/servico-listar.component';
import { ServicoCadastrarComponent } from './components/servico-cadastrar/servico-cadastrar.component';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({ declarations: [
        AppComponent,
        ClienteListarComponent,
        ClienteCadastrarComponent,
        ServicoListarComponent,
        ServicoCadastrarComponent,
        MenuInicialComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatTableModule,
        CommonModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatTableModule,
        ],
   providers: [provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()] })
export class AppModule { }
