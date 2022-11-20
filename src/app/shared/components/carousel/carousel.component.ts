import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  temp = 1

  sources = [
    'https://images.reporteindigo.com/wp-content/uploads/2022/01/Spiderman-261.jpg',
    'https://i.blogs.es/4172c9/ffxdh5lx0acd7ic/1366_2000.jpeg',
    'https://i.blogs.es/942f78/spider-man-3-tom-holland_8m76/1366_2000.jpeg',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
