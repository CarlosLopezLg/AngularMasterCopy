import { ViewInterface } from './IView';

export const VIEWS: ViewInterface[] = [
  //Angular
  {
    icon: 'angular',
    name: 'Generales Angular',
    views: [
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
        icon: 'email',
        name: 'HTTP Client',
        href: 'generales/rutas-externas',
      },
    ],
  },
  //Angular Materials
  {
    icon: 'angularjs',
    name: 'Angular materials',
    views: [
      {
        icon: 'button-cursor',
        name: 'Botones',
        href: 'materials/buttons',
      },
    ],
  },
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
  //Avanzado
  {
    icon: 'head-flash',
    name: 'Avanzado',
    views: [
      {
        icon: 'lock',
        name: 'Guards',
        href: 'avanzado/guards',
      },
      {
        icon: 'monitor-arrow-down-variant',
        name: 'Lazy load',
        href: 'avanzado/lazyload',
      },
      {
        icon: 'monitor-arrow-down-variant',
        name: 'Event Emitter',
        href: 'avanzado/event-emitter',
      },
    ],
  },
  // Librerías
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
];
