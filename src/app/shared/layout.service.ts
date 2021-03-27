import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) { }

  informations: any;


  getFilmes(): Observable<Object> {
    return this.http.get('http://localhost:3000/filmes')
  }
  getAnyFilme(event: string): Observable<Object> {
    return this.http.get(`http://localhost:3000/filmes?id=${event}`)
  }

  getInformations(event: any) {
    this.informations = event
  }

}
