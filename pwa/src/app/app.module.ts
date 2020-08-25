import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { StateSelectComponent } from './country/state-select/state-select.component';
import { StateDisplayComponent } from './country/state-display/state-display.component';
import { StateConfirmComponent } from './country/state-confirm/state-confirm.component';
import { AboutComponent } from './about/about.component';
import { BackComponent } from './about/back/back.component';
import { ConfirmComponent } from './about/confirm/confirm.component';

function createTranslateLoader(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

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
    ForwardLanguageComponent,
    StateSelectComponent,
    StateDisplayComponent,
    StateConfirmComponent,
    AboutComponent,
    BackComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
