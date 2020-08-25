import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LanguageComponent} from './language/language.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:state', component: HomeComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'language/:state', component: LanguageComponent },
  { path: 'country', component: CountryComponent },
  { path: 'country/:state', component: CountryComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' } // Redirect to `home`.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
