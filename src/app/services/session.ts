import { Injectable, signal } from '@angular/core'; 
  
@Injectable({ providedIn: 'root' }) 
export class Session { 
  connecte = signal(false); 
  nom = signal(''); 
  
  connecter(nom: string) { 
    this.nom.set(nom); 
    this.connecte.set(true); 
  } 
  
  deconnecter() { 
    this.nom.set(''); 
    this.connecte.set(false); 
  } 
} 
