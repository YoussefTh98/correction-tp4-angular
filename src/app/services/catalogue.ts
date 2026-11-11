import { Injectable } from '@angular/core'; 
import { COURS, Cours } from '../donnees/cours'; 
@Injectable({ providedIn: 'root' }) // Déclaration de la classe Catalogue comme service injectable
export class Catalogue { 
  lister(): Cours[] { 
    return COURS; 
  }
  trouver(id: number): Cours | undefined { 
    return COURS.find(c => c.id === id); 
  } 
} 