import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    private apiUrl = 'http://localhost:8080/usuarios'; 
  
    constructor(private http: HttpClient) {}
  
    listarUsuarios(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(this.apiUrl);
    }
  
    atualizarUsuario(usuario: Usuario): Observable<Usuario> {
      return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario);
    }
  
    excluirUsuario(id: string): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
  
    adicionarUsuario(usuario: Usuario): Observable<Usuario> {
      return this.http.post<Usuario>(this.apiUrl, usuario);
    }
  }
