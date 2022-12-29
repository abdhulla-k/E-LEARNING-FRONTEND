import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { UserHeaderComponent } from './user-home/user-header/user-header.component';
import { SideBarComponent } from './user-home/side-bar/side-bar.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserSignupComponent } from './auth/user-signup/user-signup.component';
import { PasswordValidatingDirective } from './shared/directives/password-validate.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    UserHeaderComponent,
    SideBarComponent,
    UserLoginComponent,
    UserHomeComponent,
    UserSignupComponent,
    PasswordValidatingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
