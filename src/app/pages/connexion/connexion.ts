import { Component, Input, inject } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 
import { Session } from '../../services/session'; 
  
@Component({ 
  selector: 'app-connexion', 
  imports: [FormsModule], 
  templateUrl: './connexion.html', 
  styleUrl: './connexion.css', 
}) 
export class Connexion { 
  private session = inject(Session); 
  private router = inject(Router); 
  
  // Reçoit le paramètre ?retour=... de l'URL (renseigné par le guard, étape 9) 
  @Input() retour = ''; 
  nom = ''; 
  
  seConnecter() {
    this.session.connecter(this.nom); 
    this.router.navigateByUrl(this.retour || '/mes-inscriptions'); 
  } 
}

