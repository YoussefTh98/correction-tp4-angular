import { Pipe, PipeTransform } from '@angular/core'; 
import { Cours } from '../donnees/cours';
  
@Pipe({ name: 'triCours' }) 
export class TriCoursPipe implements PipeTransform { // implémente l'interface PipeTransform pour créer un pipe de tri de cours
  transform(cours: Cours[], sens: 'asc' | 'desc' = 'asc'): Cours[] { // par défaut, le tri est ascendant
    const copie = [...cours].sort((a, b) => a.titre.localeCompare(b.titre)); // fait par défaut un tri ascendant
    return sens === 'desc' ? copie.reverse() : copie; // si le sens est 'desc', on inverse le tableau trié
  } 
} 
