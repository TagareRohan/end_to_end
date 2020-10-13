import { Component, OnInit } from '@angular/core';
import { FooterData } from '../footer-data';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {


  foot: FooterData={
    designer:'rohan',
    copyright:'@rohan',
    email:'abc@xyz.com'

  };

  constructor() { }

  ngOnInit() {
  }

}
