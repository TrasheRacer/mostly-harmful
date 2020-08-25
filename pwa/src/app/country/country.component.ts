import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export type State = 'england' | 'bayern';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent{

  selected: State;

  constructor(private route: ActivatedRoute) { }

  onSelected(selected: State): void {
    this.selected = selected;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const state = params.get('state');
      if (state === 'england' || state === 'bayern') { this.selected = state; }
    });
  }
}
