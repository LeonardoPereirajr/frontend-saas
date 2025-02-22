import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css'],
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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }
}