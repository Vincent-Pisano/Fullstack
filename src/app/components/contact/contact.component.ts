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

  contactForm : FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    message: new FormControl('')
  });

  validMessage: string = "";
  emailSendTo: string = "contact.renaudvincent@gmail.com"
  emailLink:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void 
  {
    console.log(this.emailSendTo);
  }

  get formSaveEtudiant()
  {
    return this.contactForm.controls;
  }

  mailMe()
  {
    
    if(this.contactForm.valid)
    {
        this.emailLink = ("mailto:" + (this.emailSendTo) + "?subject=Retour de "+ 
                          this.contactForm.controls["firstName"].value + " " + 
                          this.contactForm.controls["lastName"].value + 
                           " sur l'application fullStack&body=" + 
                          this.contactForm.controls["message"].value);
        window.location.href = this.emailLink;
        this.contactForm.reset();
        this.router.navigateByUrl('/home');
    }
    else {
      this.validMessage="Remplissez le formulaire avant de l'envoyer !"
    }
  }

}
