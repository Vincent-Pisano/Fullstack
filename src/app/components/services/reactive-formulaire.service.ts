import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GenericCrud } from './genericCrud';
import { Etudiant } from '../models/etudiant'

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormulaireService extends GenericCrud<Etudiant, number> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3850/tp");
   }
}
