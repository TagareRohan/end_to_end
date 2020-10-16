import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CibilScore } from './cibil-score';

@Injectable({
  providedIn: 'root'
})
export class CibilscoreService {

  //inject dependency
  constructor(private client: HttpClient) { }

  url="http://localhost:3000/scores";

  findAll(): Observable<CibilScore[] >
  {
    return this.client.get<CibilScore[]> (this.url);
    
  }


}
