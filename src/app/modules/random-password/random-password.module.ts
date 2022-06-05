import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPasswordComponent } from './random-password.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RandomPasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    RandomPasswordComponent
  ]
})
export class RandomPasswordModule { }
