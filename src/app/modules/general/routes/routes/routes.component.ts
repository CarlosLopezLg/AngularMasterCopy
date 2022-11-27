import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  codeRoutes = `
  const routes: Routes = [
    {
      path: "",
      redirectTo: "/home",
      pathMatch: "full",
    },
    {
      path: "home", 
      component: HomeComponent
    },
    {
      path: "**", 
      component: PageNotFoundComponent
    }
  ];
  `
  constructor() { }

  ngOnInit(): void {
  }

}
