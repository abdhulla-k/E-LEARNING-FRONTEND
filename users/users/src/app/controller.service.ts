import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  // constructor() { }
  sideNavToggler = new EventEmitter();
  loginPasswordStrength = new EventEmitter();
}
