import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInterface } from './customer-interface';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private client: HttpClient) { }

  url="http://localhost:8080/api/v1/customers";

  findAll(): Observable<CustomerInterface[] >
  {
    return this.client.get<CustomerInterface[]> (this.url);
    
  }

  add(entity: CustomerInterface): Observable<CustomerInterface> {
    return this.client.post<CustomerInterface>(this.url, entity);
  }

  remove(entity: CustomerInterface): Observable<CustomerInterface> {
    return this.client.delete<CustomerInterface>(this.url+"/"+entity.customerId);
  }
}
