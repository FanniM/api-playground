import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPasswordComponent } from './random-password.component';

@NgModule({
  declarations: [RandomPasswordComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RandomPasswordComponent
  ]
})
export class RandomPasswordModule { }
