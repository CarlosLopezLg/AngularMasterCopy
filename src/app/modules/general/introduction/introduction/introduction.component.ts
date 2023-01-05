import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { 
    this.title.setTitle('Introducción a Angular');
    this.meta.updateTag({ name: 'title', content: 'Introducción a Angular' });
    this.meta.updateTag({ name: 'description', content: 'Qué es Angular, para qué sirve y cuáles son algunos frameworks de desarrollo web similares.' });
    this.meta.updateTag({ name: 'keywords', content: 'angular, node, javascript, typescript, conejos, programadores, tutorial, guia, pasos, introducción, conceptos, generales, angular materials, materials, intermedio, introducción, qué es, concepto, definición, empezar, comenzar, vue, react' });
  }

  ngOnInit(): void {
  }

}
