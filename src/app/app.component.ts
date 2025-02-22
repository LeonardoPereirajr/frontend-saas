import { trigger, transition, style, animate, state} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('menuAnimation', [
      state('open', style({ width: '16rem' })),
      state('closed', style({ width: '4rem' })),
      transition('open <=> closed', animate('300ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  
  isMenuOpen = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}