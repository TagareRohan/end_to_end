import { Component, OnInit } from '@angular/core';
import { Driver } from 'selenium-webdriver/safari';
import { DriverInterface } from '../driver-interface';
import { DriverService } from '../driver.service';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  driverToAdd: DriverInterface = {

    driverId: 0,
    driverName: "",
    driverLicence: "",
    rating: 0,
    location:""

  }

  drivers: DriverInterface[];

  constructor(private service: DriverService) { }

  ngOnInit() {
    this.service.findAll().subscribe( data=>this.drivers=data );
  }

}
