import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {
  public toggleSidebar: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
