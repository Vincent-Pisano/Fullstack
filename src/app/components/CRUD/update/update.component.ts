import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../../models/etudiant';
import { ReactiveFormulaireService } from '../../services/reactive-formulaire.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:number;
  etudiant:Etudiant;

  updateEtudiantForm : FormGroup ;
  validMessage: string = "";

  constructor(private service: ReactiveFormulaireService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.params['idEtudiant'];

    this.service.getById(this.id).subscribe(res => {
      this.etudiant = res;
    }, (error => {
      console.log(error);
    }));

    this.updateEtudiantForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      age: new FormControl('', [Validators.required, Validators.max(99), Validators.min(0), Validators.min(0), Validators.pattern("^[0-9]+")]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      location: new FormControl('', Validators.required),
      sujet: new FormControl('', Validators.required),
      message: new FormControl('')
    });
  }
  

  get formUpdateEtudiant()
  {
    return this.updateEtudiantForm.controls;
  }

  updateEtudiant()
  {
    if(this.updateEtudiantForm.valid)
    {
      this.service.update(this.id, this.updateEtudiantForm.value).subscribe(() => {
        this.router.navigateByUrl('crud');
      }, (error => {
        console.log(error);
      }))
    }
    else {
      this.validMessage="Please fill out the form before submitting!"
    }
  }
}
