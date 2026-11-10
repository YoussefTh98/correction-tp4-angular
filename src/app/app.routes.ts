import { Routes } from '@angular/router'; 
import { Accueil } from './pages/accueil/accueil'; 
import { PageDetail } from './pages/page-detail/page-detail'; 
import { Connexion } from './pages/connexion/connexion'; 
import { Introuvable } from './pages/introuvable/introuvable'; 
import { ListeCours } from './composants/liste-cours/liste-cours'; 
import { authGuard } from './guards/auth-guard';  
import { Inscription } from './pages/inscription/inscription'; 
export const routes: Routes = [ 
  { path: '', component: Accueil, title: 'Accueil' }, 
  { path: 'cours', component: ListeCours, title: 'Catalogue' }, 
  { path: 'cours/:id', component: PageDetail, title: 'Détail du cours' }, 
  { path: 'connexion', component: Connexion, title: 'Connexion' }, 
  { path: 'inscription', component: Inscription, title: 'Inscription' }, 
  { path: 'cours/:id/inscription', component: Inscription, canActivate: [authGuard], title: 'Inscription' }, 
  { path: 'catalogue', redirectTo: 'cours', pathMatch: 'full' },
  { path: '**', component: Introuvable, title: 'Page introuvable' }, 
];