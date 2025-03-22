import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component'; 
import { Router, RouterModule  } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css'],
  standalone: true,
  imports: [CommonModule, DashboardComponent, RouterModule],
  animations: [
    trigger('menuAnimation', [
      state('open', style({ width: '16rem' })),
      state('closed', style({ width: '4rem' })),
      transition('open <=> closed', animate('300ms ease-in-out'))
    ])
  ]
})
export class MenuInicialComponent {
  isMenuOpen = true; 
  isAdmin = false;

  constructor(private router: Router, private cdRef: ChangeDetectorRef, private authService: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenData = this.authService.parseJwt(token);
      console.log('Token data:', tokenData);  
  
      if (tokenData && tokenData.roles && tokenData.roles.includes('ROLE_ADMIN')) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    }
  }
  


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  navigateTo(route: string) {
    this.router.navigate([route]).then(() => {
      this.cdRef.detectChanges(); 
    });
  }
  logout() {
    this.authService.logout();  
    this.router.navigate(['/login']); 
  }
}