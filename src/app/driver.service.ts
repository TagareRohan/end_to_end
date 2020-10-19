import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverInterface } from './driver-interface';



@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private client: HttpClient) { }

  url="http://localhost:8080/api/v1/drivers";

  findAll(): Observable<DriverInterface[] >
  {
    return this.client.get<DriverInterface[]> (this.url);
    
  }

  add(entity: DriverInterface): Observable<DriverInterface> {
    return this.client.post<DriverInterface>(this.url, entity);
  }

  remove(entity: DriverInterface): Observable<DriverInterface> {
    return this.client.delete<DriverInterface>(this.url+"/"+entity.driverId);
  }
}
