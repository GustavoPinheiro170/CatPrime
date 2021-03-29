import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogin: string;

  constructor(private http: HttpClient) { }

  login(): Observable<Object> {
    return this.http.get('http://localhost:3000/usuarios')
  }

}
