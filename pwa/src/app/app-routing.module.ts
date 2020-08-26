import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LanguageComponent} from './language/language.component';
import { CountryComponent } from './country/country.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'home/:state', component: HomeComponent },
  { path: 'language/:state', component: LanguageComponent },
  { path: 'country/:state', component: CountryComponent },
  { path: 'about/:state', component: ViewComponent },
  { path: '',   redirectTo: '/home/england', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
