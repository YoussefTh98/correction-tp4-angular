import { AbstractControl, ValidationErrors } from '@angular/forms'; 
export function nomComplet(control: AbstractControl): ValidationErrors | null { 
  const mots = (control.value ?? '').trim().split(/\s+/).filter(Boolean); 
  return mots.length >= 2 ? null : { nomComplet: true }; 
} 
