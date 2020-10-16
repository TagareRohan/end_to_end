import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

  city="pune"
  cityList=[]

  constructor() { }

  ngOnInit() {
  }

  handleClick(val: string): void
  {
    this.cityList.push(val);
    console.log(val);
  }

}
