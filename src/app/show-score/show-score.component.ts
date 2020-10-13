import { Component, OnInit } from '@angular/core';
import { CibilScore } from '../cibil-score';

@Component({
  selector: 'app-show-score',
  templateUrl: './show-score.component.html',
  styleUrls: ['./show-score.component.css']
})
export class ShowScoreComponent implements OnInit {

  score: CibilScore={
    panNumber:'abc123',
    firstName:'ram',
    score:400.0

  };
  constructor() { }

  ngOnInit() {
  }

}
