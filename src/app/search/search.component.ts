import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @Input() searchLabel: string;
  @Input() searchString: string;
  
  @Input() headings: string;
  @Input() entries: string;
  
  headingList=[];
  entryList=[];
  
  textColor="yellowText";
  border="thickBorder";
  showColor=true;
  showBorder=false;

  list: Map<string, number> =new Map();

  @Output() responseEvent =new EventEmitter<string>();

  constructor() { 

    this.list.set('ram',100);
    this.list.set('sam',200);
    this.list.set('raj',300);
  }

  ngOnInit() {
  }

  change() {

    this.showBorder=!this.showBorder;
    this.showColor=!this.showColor;
  }

  handleClick() {

    //this.responseEvent.emit("result of search "+this.searchString);
    var score=this.list.get(this.searchString);

    if(score===undefined)
    {
      this.responseEvent.emit("not found ");
    }
    else
    {
      this.responseEvent.emit("Value : "+this.list.get(this.searchString));
    }

  }

  handleSubmit() {
    console.log("headings : "+this.headings);
    console.log("entries : "+this.entries);

    this.headingList=this.headings.split(" ");
    this.entryList=this.entries.split(" ");
    

    // var temp="temp";
    // for(var i=0;i<this.headings.length;i++)
    // {
    //   if(this.headingList[i]!==undefined && this.entryList[i]!==undefined)
    //   {
    //     temp=temp+","+this.headingList[i]+":"+this.entryList[i];
    //   }
    // }

    // this.responseEvent.emit(temp);
  }

}
