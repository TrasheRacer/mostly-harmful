import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LanguageComponent } from './language/language.component';
import { CountryComponent } from './country/country.component';
import { DisplayComponent } from './home/display/display.component';
import { SelectComponent } from './home/select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LanguageComponent,
    CountryComponent,
    NavigationComponent,
    DisplayComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
