import { Pipe, PipeTransform } from '@angular/core'; 
import { Cours } from '../donnees/cours'; 
@Pipe({ name: 'filtreCours' }) 
export class FiltreCoursPipe implements PipeTransform { // implémente l'interface PipeTransform pour créer un pipe de filtrage de cours
transform(cours: Cours[], recherche: string): Cours[] { // filtre les cours en fonction de la recherche
if (!recherche) return cours; // si la recherche est vide, on retourne tous les cours
const q = recherche.toLowerCase(); // on met la recherche en minuscules pour ne pas être sensible à la casse
return cours.filter(c => c.titre.toLowerCase().includes(q)); // on filtre les cours dont le titre contient la recherche
} 
} 