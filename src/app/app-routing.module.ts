import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './pages/device/device.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'monitor' , loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) , component: DeviceComponent },
  { path: 'config', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'device' , loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) , component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
