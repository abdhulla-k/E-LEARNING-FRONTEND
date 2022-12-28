import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControllerService } from 'src/app/controller.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit, OnDestroy {
  ableButton = false; // to disable and able signup button
  loginPasswordStrength!: Subscription;

  constructor( private controllerService: ControllerService) { }

  ngOnInit(): void {
    this.loginPasswordStrength = this.controllerService.loginPasswordStrength.subscribe( data => {
      if(data === 4) {
        this.ableButton = true;
      } else {
        this.ableButton = false;
      }
    })
  }

  createUserAccount() {
    console.log("created")
  }

  ngOnDestroy(): void {
    this.loginPasswordStrength.unsubscribe();
  }
}
