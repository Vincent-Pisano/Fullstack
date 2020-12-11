import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormulaireService } from '../services/reactive-formulaire.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  etudiantForm : FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    age: new FormControl('', [Validators.required, Validators.max(99), Validators.min(0), Validators.pattern("^[0-9]+")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    location: new FormControl('', Validators.required),
    sujet: new FormControl('', Validators.required),
    message: new FormControl('')
  });

  validMessage: string = "";

  constructor(private service: ReactiveFormulaireService, private router:Router) { }

  ngOnInit(): void 
  {

  }

  get formSaveEtudiant()
  {
    return this.etudiantForm.controls;
  }

  ajoutEtudiant()
  {
    if(this.etudiantForm.valid)
    {
      this.service.save(this.etudiantForm.value).subscribe(data => {
        this.etudiantForm.reset();
        this.router.navigateByUrl('/home');
      })
    }
    else {
      this.validMessage="Please fill out the form before submitting!"
    }
  }
}
