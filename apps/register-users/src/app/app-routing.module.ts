import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from '@register-users/login';
import { AuthGuard } from '@register-users/login';
import { HomeGuard } from '@register-users/login';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[HomeGuard]
  },
  {
    path: 'login',
    component: LoginComponent
    ,

    canActivate:[AuthGuard]
  },
  {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
})
export class AppRoutingModule { }
