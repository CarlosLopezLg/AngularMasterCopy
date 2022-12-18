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
      },
      {
        icon: 'powershell',
        name: 'Comandos',
        href: 'generales/comandos',
      },
      {
        icon: 'code-json',
        name: 'Directivas',
        href: 'generales/directivas',
      },
      {
        icon: 'link-variant',
        name: 'Rutas',
        href: 'generales/rutas',
      },
      {
        icon: 'list-box-outline',
        name: 'Formularios',
        href: 'generales/formularios',
      },
      {
        icon: 'email',
        name: 'HTTP Client',
        href: 'generales/cliente/http',
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
      },
      {
        icon: 'button-cursor',
        name: 'Botones',
        href: 'materials/botones',
      },
      {
        icon: 'checkbox-blank-circle-outline',
        name: 'Spinners',
        href: 'materials/spinners',
      },
      {
        icon: 'checkbox-blank-outline',
        name: 'Progress Bar',
        href: 'materials/progress/bar',
      },
      {
        icon: 'checkbox-blank-outline',
        name: 'Slider',
        href: 'materials/slider',
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
      },
      {
        icon: 'monitor-arrow-down-variant',
        name: 'Lazy load',
        href: 'intermedio/lazy/load',
      },
      {
        icon: 'exclamation-thick',
        name: 'Event Emitter',
        href: 'intermedio/event/emitter',
      },
      {
        icon: 'shield-key-outline',
        name: 'Interceptor',
        href: 'intermedio/interceptor',
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
      },
      {
        icon: 'file-excel',
        name: 'Generar Excel',
        href: 'librerias/excel',
      },
    ],
  },
  */
];
