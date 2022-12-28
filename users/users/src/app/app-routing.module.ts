import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserLoginComponent } from './auth/user-login/user-login.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {
    path: 'user', children: [
      {path: 'home', component: UserHomeComponent },
      {path: 'login', component: UserLoginComponent },
      {path: 'signup', component: UserLoginComponent },
    ]
  },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
