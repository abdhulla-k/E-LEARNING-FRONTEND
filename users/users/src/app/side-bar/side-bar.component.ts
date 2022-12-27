import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  toggle = false; // to controll the side bar
  loggedIn = false;

  constructor( private controllService: ControllerService) {}

  ngOnInit(): void {
    this.controllService.sideNavToggler.subscribe(() => {
      // change the value of toggle varible
      this.toggle = !this.toggle;
    })
  }

  // to closs the side bar
  closeNav() {
    this.toggle = false;
  }
}
