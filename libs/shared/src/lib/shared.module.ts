import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatIconModule],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
