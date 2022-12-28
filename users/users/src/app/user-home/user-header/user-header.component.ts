import { Component } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ControllerService } from '../../controller.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  constructor( private controllerService: ControllerService) {}

  faHumbergerMenue = faBars; // humber ger or toggle menue icon
  loggedIn = false;

  // function to control side bar with humberger icon
  toggleSidebar() {
    this.controllerService.sideNavToggler.emit();
  }
}
