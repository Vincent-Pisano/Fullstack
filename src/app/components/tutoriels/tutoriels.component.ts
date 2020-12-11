import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tutoriels',
  templateUrl: './tutoriels.component.html',
  styleUrls: ['./tutoriels.component.css']
})
export class TutorielsComponent implements OnInit {

  tutorielLinkId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((myMap: Params) => {
      this.tutorielLinkId = myMap.id;
    });
  }

}
