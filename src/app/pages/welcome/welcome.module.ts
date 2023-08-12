import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { DeviceComponent } from '../device/device.component';
import { ChartComponent } from '../chart/chart.component';


@NgModule({
  imports: [
    WelcomeRoutingModule],
  declarations: [WelcomeComponent,DeviceComponent,ChartComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
