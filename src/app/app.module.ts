import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TutorielsComponent } from './components/tutoriels/tutoriels.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { FunComponent } from './components/fun/fun.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadComponent } from './components/CRUD/read/read.component';
import { UpdateComponent } from './components/CRUD/update/update.component';
import { CrudComponent } from './components/CRUD/crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TutorielsComponent,
    FormulaireComponent,
    FunComponent,
    ContactComponent,
    Error404Component,
    ReadComponent,
    UpdateComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,     
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
