import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WalkthroughModule } from './walkthrough/walkthrough.module';
import { UnderConstructionModalComponent } from './under-construction-modal/under-construction-modal.component';
import { UnderConstructionHomeComponent } from './under-construction-home/under-construction-home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    UnderConstructionModalComponent,
    UnderConstructionHomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    WalkthroughModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
