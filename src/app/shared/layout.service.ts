import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) { }

  informations: any;

  urlApi: string = 'https://catprime.herokuapp.com/filmes'

  getFilmes(): Observable<Object> {
    return this.http.get(this.urlApi)
  }
  getAnyFilme(event: string): Observable<Object> {
    return this.http.get(`${this.urlApi}?id=${event}`)
  }

  getInformations(event: any) {
    this.informations = event
  }

}
