import { Component, Input, OnInit, inject } from '@angular/core'; 
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private fb  = inject(FormBuilder);
  
  @Input() id = '';          // reçoit le :id de l'URL 
  confirmation = ''; 
  
  form = new FormGroup({ 
    nom: this.fb.control('', [Validators.required, nomComplet]), 
    email: this.fb.control('', [Validators.required, Validators.email]), 
    telephone: this.fb.control('', [Validators.pattern(/^[0-9]{8}$/)]), 
    niveau: this.fb.control('', [Validators.required]), 
    motivation: this.fb.control('', [Validators.required, Validators.minLength(20)]), 
    conditions: this.fb.control(false, [Validators.requiredTrue]), 
  }); 
  get cours(): Cours | undefined { 
    return COURS.find(c => c.id === Number(this.id)); 
  } 
 nbCaracteres = 0;
 ngOnInit() {
  this.form.patchValue({ nom: this.session.nom() });
  this.motivation.valueChanges.subscribe(v => {
    this.nbCaracteres = v?.length ?? 0;
  });
}
  get nom() { return this.form.controls.nom; } 
  get email() { return this.form.controls.email; } 
  get telephone() { return this.form.controls.telephone; } 
  get niveau() { return this.form.controls.niveau; } 
  get motivation() { return this.form.controls.motivation; } 
  get conditions() { return this.form.controls.conditions; } 
  
} 

