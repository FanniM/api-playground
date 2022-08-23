import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MosaicComponent } from './components/mosaic-component/mosaic.component';


@NgModule({
  declarations: [MosaicComponent],
  imports: [
    CommonModule
  ],
  exports: [MosaicComponent]
})
export class MosaicModule { }
