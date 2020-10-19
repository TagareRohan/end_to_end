import { Component, OnInit } from '@angular/core';
import { CustomerInterface } from '../customer-interface';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  customerToAdd: CustomerInterface = {
    customerId: 0,
    customerName: ""
  }

  customers: CustomerInterface[];

  buttonName="Add";

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.findAll().subscribe( data=>this.customers=data );
  }

  submit()
  {
    console.log(this.customerToAdd);
    //this.scores.push(this.scoreToAdd);
    this.service.add(this.customerToAdd).subscribe(data=> this.customers.push(data));
    this.customerToAdd={customerId:0, customerName:""};
    this.buttonName="Add";
  }

  updateCustomer(entity: CustomerInterface)
  {
    this.buttonName="Update";
    this.customerToAdd=entity;
    //this.submit();
  }

  removeCustomer(entity: CustomerInterface)
  {
    const idxPos=this.customers.indexOf(entity);

    //this.scores.splice(idxPos, 1);
    this.service.remove(entity).subscribe(data => this.customers.splice(idxPos, 1));

    console.log(entity);
  }

}
