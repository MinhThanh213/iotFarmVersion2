import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { DeviceComponent } from '../device/device.component';


@NgModule({
  imports: [
    WelcomeRoutingModule],
  declarations: [WelcomeComponent,DeviceComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
