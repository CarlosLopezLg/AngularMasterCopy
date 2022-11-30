import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class HttpDemoService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<UserInterface>>{
    return this.http.get<Array<UserInterface>>('https://jsonplaceholder.typicode.com/users');
  }
}
