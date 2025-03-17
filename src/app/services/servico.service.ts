import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Servico } from '../models/servico.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private apiUrl = 'http://localhost:8080/servicos'; 
  constructor(private http: HttpClient, private authService: AuthService) {}

  listarTodos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.apiUrl).pipe(
      tap(response => {
        console.log('Serviços recebidos da API:', response); 
      })
    );
  }

  salvar(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.apiUrl, servico);
  }
  atualizar(id: string, servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${this.apiUrl}/${id}`, servico);
  }

  deletar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  obterPorId(id: string): Observable<Servico> {
    return this.http.get<Servico>(`${this.apiUrl}/${id}`);
  }
  
}