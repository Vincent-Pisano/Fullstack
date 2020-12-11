import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CrudComponent } from './components/CRUD/crud/crud.component';
import { ReadComponent } from './components/CRUD/read/read.component';
import { UpdateComponent } from './components/CRUD/update/update.component';
import { Error404Component } from './components/error404/error404.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { FunComponent } from './components/fun/fun.component';
import { HomeComponent } from './components/home/home.component';
import { TutorielsComponent } from './components/tutoriels/tutoriels.component';


const routes: Routes = [
  {path:'tutoriel',
    children:[
      {path:':id', component: TutorielsComponent},
    ]},
  {path:'formulaire', component: FormulaireComponent},
  {path:'updateFormulaire/:idEtudiant', component: UpdateComponent},
  {path:'afficheEtudiant/:idEtudiant', component: ReadComponent},
  {path:'crud', component: CrudComponent},
  {path:'fun', component: FunComponent},
  {path:'contact', component: ContactComponent},
  {path:'home', component: HomeComponent},

  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
