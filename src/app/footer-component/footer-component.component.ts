import { Component, OnInit, Input } from '@angular/core';
import { FooterData } from '../footer-data';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {


  // foot: FooterData={
  //   designer:'rohan',
  //   copyright:'@rohan',
  //   email:'abc@xyz.com'

  // };

  @Input() footerCopyright: string;
  @Input() footerEmail: string;

  copyright="";
  email="";

  constructor() { }

  ngOnInit() {

    this.copyright=this.footerCopyright;
    this.email=this.footerEmail;
  }

}
