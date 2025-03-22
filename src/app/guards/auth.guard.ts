import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      const requiredRoles = next.data['roles'];
      
      if (!requiredRoles || requiredRoles.length === 0) {
        return true;
      }

      if (this.authService.hasRole(requiredRoles)) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
