import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { State } from '../country/country.component';

export type SelectedFlow = 'start' | 'about';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  selected: SelectedFlow;
  state: State

  constructor(private route: ActivatedRoute) { }

  onSelected(selected: SelectedFlow): void {
    this.selected = selected;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const state = params.get('state');
      if (state === 'england' || state === 'bayern') { this.state = state; }
    });
  }
}
