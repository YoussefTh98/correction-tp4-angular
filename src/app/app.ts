import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';
import { Session } from './services/session';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, EnTete, PiedPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  session = inject(Session);
  private router = inject(Router);

  deconnecter() {
    this.session.deconnecter();
    this.router.navigateByUrl('/');
  }
}