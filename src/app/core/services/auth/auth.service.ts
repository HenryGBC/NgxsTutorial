import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  login(data: any): Observable<any> {
    const tokenResponse = {
      token: '12312312312',
    };
    console.log(tokenResponse);
    return of(tokenResponse);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token;
  }
}
