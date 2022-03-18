import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPasswordComponent } from './random-password.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RandomPasswordComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RandomPasswordComponent
  ]
})
export class RandomPasswordModule { }
