import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<string> {
    return this.http.post<{ token: string }>(this.apiUrl, { email, senha }).pipe(
      map(response => response.token),
      tap(token => {
        console.log('Token recebido do backend:', token);
        localStorage.setItem('token', token);
      }),
      catchError(error => {
        console.error('Erro na autenticação:', error);
        return of(''); 
      })
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
  
    const tokenData = this.parseJwt(token);
    if (tokenData.exp * 1000 < Date.now()) {
      this.logout(); // Expirou? Remove o token e força logout.
      return false;
    }
  
    return true;
  }

  parseJwt(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }

  

  logout(): void {
    console.log('Deslogando...');
    localStorage.removeItem('token');
  }
}
