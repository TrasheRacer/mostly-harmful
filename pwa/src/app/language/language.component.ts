import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State } from '../country/country.component';

export type Language = 'en' | 'de';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
})
export class LanguageComponent {

  selected: Language;
  state: State

  constructor(private route: ActivatedRoute) {}

  onSelected(selected: Language): void {
    this.selected = selected;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const state = params.get('state');
      if (state === 'england' || state === 'bayern') { this.state = state; }
    });
  }
}
