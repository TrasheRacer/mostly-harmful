import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTemplateModule } from './view-template/view-template.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
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
