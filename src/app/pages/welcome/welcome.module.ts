import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { DeviceComponent } from '../device/device.component';
import { ChartComponent } from '../chart/chart.component';
import {CommonModule} from "@angular/common";



@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule],
  declarations: [
    WelcomeComponent,
    DeviceComponent,
    ChartComponent,
    ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
