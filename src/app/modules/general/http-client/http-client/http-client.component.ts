import { Component, OnInit } from '@angular/core';
import { HttpDemoService } from '../http-demo.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  demoCodeOne = `
  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class HttpDemoService {

    constructor(private http: HttpClient) { }

    getPosts(): Observable<any>{
      return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
    }
  }
  `

  constructor(private demoService: HttpDemoService) { }

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.demoService.getPosts().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) =>{
        console.error(err)
      }
    })
  }

}
