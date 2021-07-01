import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericComponent } from './generic/generic.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    GenericComponent
  ],
  exports:[GenericComponent]
})
export class GenericModule {}
