import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {


  @Input() headerLogo: string;
  @Input() headerMoto: string;

  logo="";
  moto="";

  constructor() { }

  ngOnInit() {
    this.logo=this.headerLogo;
    this.moto=this.headerMoto;
  }

}
