import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
