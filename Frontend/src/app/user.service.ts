import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  login(user: User): Observable<any> {
    return this.httpClient.post('http://localhost:8082/user/login', user);
  }

  register(user: User): Observable<any> {
    return this.httpClient.post('http://localhost:8082/user/register', user);
  }
}
