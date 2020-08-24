import { Component, OnInit } from '@angular/core';

export type State = 'england' | 'bayern';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent{

  selected: State;

  constructor() { }

  onSelected(selected: State): void {
    this.selected = selected;
  }
}
