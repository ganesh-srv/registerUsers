import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@register-users/shared';
import {MatTableModule} from '@angular/material/table'
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule
  ]
})
export class DashboardModule { }
