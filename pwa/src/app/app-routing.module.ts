import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { StartComponent } from './start/start.component';
import { IdentityComponent } from './identity/identity.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: ':legalDistrict', component: HomeComponent },
  { path: ':legalDistrict/self-id', component: IdentityComponent },
  { path: ':legalDistrict/get-help', component: StartComponent },
  { path: ':legalDistrict/settings', component: SettingsComponent },
  { path: ':legalDistrict/about', component: AboutComponent },
  { path: '',   redirectTo: '/england', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
