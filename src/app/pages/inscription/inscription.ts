import { Component, Input, OnInit, inject } from '@angular/core'; 
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { RouterLink } from '@angular/router'; 
import { COURS, Cours } from '../../donnees/cours'; 
import { Session } from '../../services/session'; 
import { nomComplet } from '../../validators/nom-complet';  
  
@Component({ 
  selector: 'app-inscription', 
  imports: [ReactiveFormsModule, RouterLink], 
  templateUrl: './inscription.html', 
  styleUrl: './inscription.css', 
}) 
export class Inscription implements OnInit {
envoyer() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const { nom, email } = this.form.value;
  this.confirmation =
    `Merci ${nom} ! Votre inscription à « ${this.cours?.titre} » est enregistrée. ` +
    `Un message de confirmation sera envoyé à ${email}.`;

  console.log('Inscription :', this.form.value);
  this.form.reset();
} 
  private session = inject(Session); 
  
  @Input() id = '';          // reçoit le :id de l'URL 
  confirmation = ''; 
  
  form = new FormGroup({ 
    nom: new FormControl('', [Validators.required, nomComplet]), 
    email: new FormControl('', [Validators.required, Validators.email]), 
    telephone: new FormControl('', [Validators.pattern(/^[0-9]{8}$/)]), 
    niveau: new FormControl('', [Validators.required]), 
    motivation: new FormControl('', [Validators.required, Validators.minLength(20)]), 
    conditions: new FormControl(false, [Validators.requiredTrue]), 
  }); 
  get cours(): Cours | undefined { 
    return COURS.find(c => c.id === Number(this.id)); 
  } 
  ngOnInit() { 
    // Pré-remplit le nom avec celui de l'utilisateur connecté 
    this.form.patchValue({ nom: this.session.nom() }); 
  } 
  get nom() { return this.form.controls.nom; } 
  get email() { return this.form.controls.email; } 
  get telephone() { return this.form.controls.telephone; } 
  get niveau() { return this.form.controls.niveau; } 
  get motivation() { return this.form.controls.motivation; } 
  get conditions() { return this.form.controls.conditions; } 
  
} 

