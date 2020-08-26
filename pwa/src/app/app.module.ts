import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTemplateModule } from './view-template/view-template.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { IdentityComponent } from './identity/identity.component';
import { AboutComponent } from './about/about.component';
import { EthnicityComponent } from './identity/ethnicity/ethnicity.component';
import { GenderComponent } from './identity/gender/gender.component';
import { HelpComponent } from './help/help.component';
import { GuideComponent } from './guide/guide.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SettingsComponent,
    IdentityComponent,
    AboutComponent,
    EthnicityComponent,
    GenderComponent,
    HelpComponent,
    GuideComponent,
    UploadComponent,
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
