import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTemplateModule } from './view-template/view-template.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { StartComponent } from './start/start.component';
import { IdentityComponent } from './identity/identity.component';
import { AboutComponent } from './about/about.component';
import { EthnicityComponent } from './identity/ethnicity/ethnicity.component';
import { GenderComponent } from './identity/gender/gender.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SettingsComponent,
    StartComponent,
    IdentityComponent,
    AboutComponent,
    EthnicityComponent,
    GenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ViewTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
