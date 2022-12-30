import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { AuthService } from 'src/app/auth/auth.service';
import { ControllerService } from '../../controller.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  constructor( private controllerService: ControllerService, private authService: AuthService) {}

  faHumbergerMenue = faBars; // humber ger or toggle menue icon
  loggedIn = false;

  ngOnInit(): void {
    this.loggedIn = this.authService.loggedInStatus;
    
    this.authService.loggedIn.subscribe(data => {
      this.loggedIn = true;
      console.log(this.loggedIn);
    })
  }

  // function to control side bar with humberger icon
  toggleSidebar() {
    this.controllerService.sideNavToggler.emit();
  }
}
