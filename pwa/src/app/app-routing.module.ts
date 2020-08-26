import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: ':legalDistrict', component: HomeComponent },
  { path: ':legalDistrict/start', component: StartComponent },
  { path: ':legalDistrict/settings', component: SettingsComponent },
  { path: '',   redirectTo: '/england', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
