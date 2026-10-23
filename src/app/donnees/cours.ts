export interface Cours {
  id: number;
  titre: string;
  categorie: string;
  duree: string;
  places: number;
}

export const COURS: Cours[] = [
  { id: 1, titre: 'Angular avancé', categorie: 'Front-end', duree: '12h', places: 8 },
  { id: 2, titre: 'TypeScript pour développeurs', categorie: 'Langage', duree: '8h', places: 15 },
  { id: 3, titre: 'API REST avec Node.js', categorie: 'Back-end', duree: '16h', places: 6 },
  { id: 4, titre: 'Git et travail collaboratif', categorie: 'Outils', duree: '4h', places: 20 },
];