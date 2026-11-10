import { TestBed } from '@angular/core/testing';
import { NomComplet } from './nom-complet';

describe('NomComplet', () => {
  let service: NomComplet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomComplet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
