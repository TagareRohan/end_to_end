import { Component, OnInit } from '@angular/core';
import { CibilScore } from '../cibil-score';
import { CibilscoreService } from '../cibilscore.service';

@Component({
  selector: 'app-add-scores',
  templateUrl: './add-scores.component.html',
  styleUrls: ['./add-scores.component.css']
})
export class AddScoresComponent implements OnInit {

  scoreToAdd: CibilScore = {
    id: 0,
    panNumber: "",
    firstName: "",
    score: 0 
  }
  
  scores: CibilScore[];

  constructor(private service: CibilscoreService) { }

  ngOnInit() {

    this.service.findAll().subscribe( data=>this.scores=data );
    //console.log("done");
  }

  submit()
  {
    console.log(this.scoreToAdd);
    //this.scores.push(this.scoreToAdd);
    this.service.add(this.scoreToAdd).subscribe(data=> this.scores.push(data));
    this.scoreToAdd={id:0,panNumber:"",firstName:"",score:0};

  }

  remove(entity: CibilScore)
  {
    const idxPos=this.scores.indexOf(entity);

    //this.scores.splice(idxPos, 1);
    this.service.remove(entity).subscribe(data => this.scores.splice(idxPos, 1));

    console.log(entity);
  }

}
