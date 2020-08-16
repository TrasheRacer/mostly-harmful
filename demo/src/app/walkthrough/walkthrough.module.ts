import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountryComponent } from './country/country.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RouterModule } from '@angular/router';
import { ReasonComponent } from './reason/reason.component';
import { IdentityComponent } from './identity/identity.component';

@NgModule({
  declarations: [CountryComponent, VehicleComponent, ReasonComponent, IdentityComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ]
})
export class WalkthroughModule { }
