import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './walkthrough/country/country.component';
import { VehicleComponent } from './walkthrough/vehicle/vehicle.component';
import { ReasonComponent } from './walkthrough/reason/reason.component';
import { IdentityComponent } from './walkthrough/identity/identity.component';
import { UnderConstructionHomeComponent } from './under-construction-home/under-construction-home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'under-construction', component: UnderConstructionHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'walkthrough/country', component: CountryComponent },
  { path: 'walkthrough/country/:country/vehicle', component: VehicleComponent },
  { path: 'walkthrough/country/:country/vehicle/:vehicle/reason', component: ReasonComponent },
  { path: 'walkthrough/country/:country/vehicle/:vehicle/reason/:reason/officer/:officer/identity', component: IdentityComponent },
  { path: '',   redirectTo: '/under-construction', pathMatch: 'full' }, // Redirect to `home`.
  { path: '**', component: NotFoundComponent },  // Wildcard route for a 404 page.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
