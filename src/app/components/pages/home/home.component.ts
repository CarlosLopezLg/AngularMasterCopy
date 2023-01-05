import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { 
    this.title.setTitle('Guía de Angular');
    this.meta.updateTag({ name: 'title', content: 'Guía de Angular' });
    this.meta.updateTag({ name: 'description', content: 'Conoce y empieza a trabajar con el Framework de desarrollo web Angular mediante este tutorial para usuarios principiantes e intermedios.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, node, javascript, typescript, conejos, programadores, tutorial, guia, pasos, introducción, conceptos, generales, angular materials, materials, intermedio' });
  }

  ngOnInit(): void {
  }

}
