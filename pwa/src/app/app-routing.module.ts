import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { StartComponent } from './start/start.component';
import { IdentityComponent } from './identity/identity.component';
import { AboutComponent } from './about/about.component';
import { EthnicityComponent } from './identity/ethnicity/ethnicity.component';
import { GenderComponent } from './identity/gender/gender.component';

const routes: Routes = [
  { path: ':region', component: HomeComponent },
  { path: ':region/identity', component: IdentityComponent },
  { path: ':region/identity/ethnicity', component: EthnicityComponent },
  { path: ':region/identity/gender', component: GenderComponent },
  { path: ':region/help', component: StartComponent },
  { path: ':region/settings', component: SettingsComponent },
  { path: ':region/about', component: AboutComponent },
  { path: '',   redirectTo: '/england', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
