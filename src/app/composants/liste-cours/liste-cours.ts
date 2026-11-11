import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltreCoursPipe } from '../../pipes/filtre-cours-pipe';
import { TriCoursPipe } from '../../pipes/tri-cours-pipe';
import { UpperCasePipe } from '@angular/common';
import { PlacesRestantesPipe } from '../../pipes/places-restantes-pipe';
import { TronquerPipe } from '../../pipes/tronquer-pipe';
import { Cours, COURS } from '../../donnees/cours';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-liste-cours',
  imports: [FormsModule, RouterLink, FiltreCoursPipe, TriCoursPipe, UpperCasePipe, PlacesRestantesPipe, TronquerPipe],
  templateUrl: './liste-cours.html',
  styleUrl: './liste-cours.css'
})
export class ListeCours{
  recherche = '';
  tri: 'asc' | 'desc' = 'asc';
  @Output() coursSelectionne = new EventEmitter<Cours>();
  coursActif: Cours | null = null;
  cours: Cours[] = COURS;

  selectionner(c: Cours) {
    this.coursActif = c;
    this.coursSelectionne.emit(c);
  }
}