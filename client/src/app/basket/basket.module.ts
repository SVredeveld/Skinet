import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketRootingModule } from './basket-rooting.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasketRootingModule,
    SharedModule
  ]
})
export class BasketModule { }
