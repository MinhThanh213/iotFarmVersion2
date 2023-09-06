import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { DeviceComponent } from '../device/device.component';
import { ChartComponent } from '../chart/chart.component';
import {CommonModule} from "@angular/common";
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule,
    FormsModule],
  declarations: [
    WelcomeComponent,
    DeviceComponent,
    ChartComponent,
    DashboardComponent
    ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
