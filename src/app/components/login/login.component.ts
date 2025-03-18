import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('Tentando login com:', this.email, this.senha);

    this.authService.login(this.email, this.senha).subscribe(
      (token) => {
        console.log('Token salvo no LocalStorage:', localStorage.getItem('token'));
        
        if (token) {
          console.log('Login bem-sucedido! Redirecionando para /home');
          this.router.navigate(['/home']); 
        } else {
          console.log('Token não recebido. Autenticação falhou.');
          alert('Erro ao autenticar. Verifique as credenciais!');
        }
      },
      error => {
        console.error('Erro ao autenticar:', error);
        alert('Erro ao autenticar. Verifique as credenciais!');
        if (error.status === 401) {
          this.authService.logout();
          alert('Sessão expirada, faça login novamente.');
        }
      }
    );
  }
}
