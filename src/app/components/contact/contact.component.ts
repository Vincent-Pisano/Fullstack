import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormulaireService } from '../services/reactive-formulaire.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  etudiantForm : FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    message: new FormControl('')
  });

  validMessage: string = "";
  emailSendTo: string = "contact.renaudvincent@gmail.com"
  emailLink:string = "";

  constructor(private service: ReactiveFormulaireService, private router:Router) { }

  ngOnInit(): void 
  {
    console.log(this.emailSendTo);
  }

  get formSaveEtudiant()
  {
    return this.etudiantForm.controls;
  }

  mailMe()
  {
    
    if(this.etudiantForm.valid)
    {
        this.emailLink = ("mailto:" + (this.emailSendTo) + "?subject=" + "Retour de "+ 
                          this.etudiantForm.controls["firstName"].value + " " + 
                          this.etudiantForm.controls["lastName"].value + 
                           " sur l'application fullStack&body=" + 
                          this.etudiantForm.controls["message"].value);
        window.location.href = this.emailLink;
        this.etudiantForm.reset();
        this.router.navigateByUrl('/home');
    }
    else {
      this.validMessage="Remplissez le formulaire avant de l'envoyer !"
    }
  }

}
