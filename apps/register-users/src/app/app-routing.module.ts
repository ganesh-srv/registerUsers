import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.gaurd';
import { HomeGuard } from './login/home.guard';



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
