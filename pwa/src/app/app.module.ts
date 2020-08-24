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
import { ForwardComponent } from './home/forward/forward.component';
import { SelectLanguageComponent } from './language/select-language/select-language.component';
import { DisplayLanguageComponent } from './language/display-language/display-language.component';
import { ForwardLanguageComponent } from './language/forward-language/forward-language.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LanguageComponent,
    CountryComponent,
    NavigationComponent,
    DisplayComponent,
    SelectComponent,
    ForwardComponent,
    SelectLanguageComponent,
    DisplayLanguageComponent,
    ForwardLanguageComponent
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
