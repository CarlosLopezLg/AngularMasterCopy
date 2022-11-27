import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  temp = 1

  sources = [
    'https://los40.com/los40/imagenes/2022/08/24/musica/1661332522_602934_1661332828_gigante_normal.jpg',
    'https://imagenes.elpais.com/resizer/r5yYVe3JRSYCQUEjidgkpV0nGac=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/ZES25E24PVPG55UVXUM4DJELUU.jpg',
    'https://cdn.cloudflare.steamstatic.com/steam/apps/2107410/ss_547ab8632d86a66a83361e2280de4ef4522cc818.1920x1080.jpg?t=1660326839',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
