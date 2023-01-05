import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent implements OnInit {

  interceptorCode = `
  import { Injectable } from '@angular/core';
  import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthInterceptorService implements HttpInterceptor {

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
      const token: string = localStorage.getItem('token');

      let request = req;

      if (token) {
        request = req.clone({
          setHeaders: {
            authorization: "Bearer " + token;
          }
        });
      }

      return next.handle(request);
    }

  }
  `

  moduleCode = `
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
  import { AuthInterceptorService } from './auth-interceptor.service';

  import { AppComponent } from './app.component';

  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
      }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  `

  constructor(private meta: Meta, private title: Title) { 
    this.title.setTitle('Implementación de Interceptor en Angular');
    this.meta.updateTag({ name: 'title', content: 'Implementación de Interceptor en Angular' });
    this.meta.updateTag({ name: 'description', content: 'Conoce cómo implementar los Interceptor en Angular para aumentar la seguridad de tu página web y denegar permisos de acceso.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, node, javascript, typescript, conejos, programadores, tutorial, guia, pasos, introducción, intermedio, interceptor, http, peticiones, token, servidor, Provide, multi, useClass' });
  }

  ngOnInit(): void {
  }

}
