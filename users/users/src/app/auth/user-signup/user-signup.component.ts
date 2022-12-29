import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { ControllerService } from 'src/app/controller.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit, OnDestroy {
  ableButton = false; // to disable and able signup button
  loginPasswordStrength!: Subscription;
  passwordConfirmed = false;

  constructor( 
    private controllerService: ControllerService, 
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginPasswordStrength = this.controllerService.loginPasswordStrength.subscribe( data => {
      if(data === 4) {
        this.ableButton = true;
      } else {
        this.ableButton = false;
      }
    })
  }

  // function to sumbmit signup data or request to create new account
  onSubmit(formData: NgForm) {
    // make sure the password and confirm password are same
    this.passwordConfirmed = formData.value.confirmPassword == formData.value.password? true : false;
    
    // send the data to server
    if(this.passwordConfirmed && this.ableButton) {
      this.authService.signUp(formData.value);
    }
  }

  ngOnDestroy(): void {
    this.loginPasswordStrength.unsubscribe();
  }
}
