import { ViewInterface } from './IView';

export const VIEWS: ViewInterface[] = [
  //Angular
  {
    icon: 'angular',
    name: 'Generales Angular',
    views: [
      {
        icon: 'bookshelf',
        name: 'Introducción',
        href: 'generales/introduccion',
        keywords: ['']
      },
      {
        icon: 'powershell',
        name: 'Comandos',
        href: 'generales/comandos',
        keywords: ['']
      },
      {
        icon: 'code-json',
        name: 'Directivas',
        href: 'generales/directivas',
        keywords: ['']
      },
      {
        icon: 'link-variant',
        name: 'Rutas',
        href: 'generales/rutas',
        keywords: ['']
      },
      {
        icon: 'list-box-outline',
        name: 'Formularios',
        href: 'generales/formularios',
        keywords: ['']
      },
      {
        icon: 'email',
        name: 'HTTP Client',
        href: 'generales/cliente/http',
        keywords: ['']
      },
    ],
  },
  //Angular Materials
  {
    icon: 'angularjs',
    name: 'Angular materials',
    views: [
      {
        icon: 'bookshelf',
        name: 'Introducción',
        href: 'materials/introduccion',
        keywords: ['']
      },
      {
        icon: 'button-cursor',
        name: 'Botones',
        href: 'materials/botones',
        keywords: ['']
      },
      {
        icon: 'checkbox-blank-circle-outline',
        name: 'Spinners',
        href: 'materials/spinners',
        keywords: ['']
      },
      {
        icon: 'percent-outline',
        name: 'Progress Bar',
        href: 'materials/progress/bar',
        keywords: ['']
      },
      {
        icon: 'checkbox-blank-outline',
        name: 'Slider',
        href: 'materials/slider',
        keywords: ['']
      },
      {
        icon: 'checkbox-blank-circle-outline',
        name: 'Ripples',
        href: 'materials/ripples',
        keywords: ['']
      },
      {
        icon: 'checkbox-outline',
        name: 'Check box',
        href: 'materials/checkbox',
        keywords: ['']
      },
    ],
  },
  /*
  //Typescript
  {
    icon: 'language-typescript',
    name: 'Typescript',
    views: [
      {
        icon: 'timeline-question',
        name: 'Operador ternario',
        href: 'typescript/buttons',
        keywords: ['']
      },
    ],
  },
  //Buenas prácticas
  {
    icon: 'human-male-board',
    name: 'Buenas prácticas',
    views: [
      {
        icon: 'window-shutter-cog',
        name: 'Uso de environment',
        href: 'buenas-practicas/environment',
        keywords: ['']
      },
    ],
  },
  */
  //Avanzado
  {
    icon: 'dumbbell',
    name: 'Intermedio',
    views: [
      {
        icon: 'lock',
        name: 'Guards',
        href: 'intermedio/guards',
        keywords: ['']
      },
      {
        icon: 'monitor-arrow-down-variant',
        name: 'Lazy load',
        href: 'intermedio/lazy/load',
        keywords: ['']
      },
      {
        icon: 'exclamation-thick',
        name: 'Event Emitter',
        href: 'intermedio/event/emitter',
        keywords: ['']
      },
      {
        icon: 'shield-key-outline',
        name: 'Interceptor',
        href: 'intermedio/interceptor',
        keywords: ['']
      },
    ],
  },
  // Librerías
  /*
  {
    icon: 'file-account',
    name: 'Librerías',
    views: [
      {
        icon: 'file-pdf-box',
        name: 'Generar PDF',
        href: 'librerias/pdf',
        keywords: ['']
      },
      {
        icon: 'file-excel',
        name: 'Generar Excel',
        href: 'librerias/excel',
        keywords: ['']
      },
    ],
  },
  */
];
