import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html'
})
export class CountryComponent {
  selectedCountry = 'none';

  constructor(private route: ActivatedRoute) { }

  onCountry(country: string): void {
    this.selectedCountry = country;
  }
}
