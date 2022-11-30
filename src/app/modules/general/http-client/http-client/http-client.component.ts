import { Component, OnInit } from '@angular/core';
import { HttpDemoService } from '../http-demo.service';
import { UserInterface } from '../IUser';


@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  demoCodeInterface = `
  export interface UserInterface {
    name: string;
    email: string
  }
  `
  demoCodeOne = `
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
  `
  httpDemoHtmlContent:string = `
  <button [disabled]="postsLoaded" (click)="getPosts()"> Consumir servicio </button>
  <div *ngFor="let post of posts">
    <p><b>{{ post.name }}</b></p>
    <p>{{ post.email }}</p>
  </div>
  `
  httpDemoTsContent:string = `
  import { Component } from '@angular/core';
  import { HttpDemoService } from '../http-demo.service';
  import { UserInterface } from '../IUser';

  constructor(private demoService: HttpDemoService) { }
  
  posts:Array<UserInterface> = [];
  postsLoaded:boolean = false;

  getPosts() {
    this.demoService.getPosts().subscribe({
      next: (res) => {
        this.posts = res;
        this.postsLoaded = true;
      },
      error: (err) =>{
        console.error(err)
      }
    })
  }
  `

  posts:Array<UserInterface> = [];
  postsLoaded:boolean = false;

  constructor(private demoService: HttpDemoService) { }

  ngOnInit(): void {
  }

  getPosts() {
    this.demoService.getPosts().subscribe({
      next: (res) => {
        this.posts = res;
        this.postsLoaded = true;
      },
      error: (err) =>{
        console.error(err)
      }
    })
  }

}
