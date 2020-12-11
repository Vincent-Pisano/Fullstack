import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  listEtudiants:Array<Etudiant>;
  public headElements = ["ID", "Prénom", "Nom", "age", "email", "", "Operations", ""];
  idToDelete:number;
  position:number;

  constructor(private service: EtudiantService) { }

  ngOnInit(): void {
    this.getAllEtudiants();
  }
  
  getAllEtudiants():void
  {
    this.service.getAll().subscribe(result => {   // => Qu'est ce que je fait avec
      this.listEtudiants=result
    }, (error) => {
      console.log(error);
    })
  }

  saveId(id:number, position:number)
  {
    this.idToDelete = id;
    this.position = position
  }

  public deleteEtudiant()
  {
    this.service.deleteById(this.idToDelete).subscribe(result => {
      this.listEtudiants.splice(this.position, 1);
    }, (error) => {
      console.log(error);
    })
  }

}
