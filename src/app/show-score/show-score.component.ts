import { Component, OnInit } from '@angular/core';
import { CibilScore } from '../cibil-score';
import { CibilscoreService } from '../cibilscore.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-show-score',
  templateUrl: './show-score.component.html',
  styleUrls: ['./show-score.component.css']
})
export class ShowScoreComponent implements OnInit {

  scoreList: CibilScore[];
  
  showImage="none";

  buttonName="show";
  disableHide=true;
  disableShow=false;
  search="search by pan number";

  tableHeadings="";
  tableEntries="";


  text="hellohi"

  salary=100000.00;
  currentDate=new Date();
  result="";
  queryString="";

  headList=[];
  enterList=[];


  constructor(private service: CibilscoreService) { }

  ngOnInit() {

    this.service.findAll().subscribe( data=>this.scoreList=data );
    //console.log("done");
  }

  handleClick(val: string): void 
  {
    if(val=="show")
    {
      this.showImage="inline";
      this.buttonName="hide";
      // this.disableShow=true;
      // this.disableHide=false;
      
    }
    if(val=="hide")
    {
      this.showImage="none";
      this.buttonName="show";
      // this.disableShow=false;
      // this.disableHide=true;
    }
  }

  handleResponse(val) {

    // this.result=val;
    // console.log(val);

    // var temp1=val.split(",");
    // for(var i=1;i<temp1.length;i++)
    // {
    //   if(temp1[i].split(":")[0]!==undefined)
    //   {this.headList.push(temp1[i].split(":")[0]);}
    //   if(temp1[i].split(":")[1]!==undefined)
    //   {this.enterList.push(temp1[i].split(":")[1]);}
    // }


  }

}
