import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/modules/home/pages/home/home.component';
import {AppLayoutRouting} from './layout-routing.module';



@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    AppLayoutRouting,
  ]
})
export class LayoutModule { }
