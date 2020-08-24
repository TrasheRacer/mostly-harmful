import { Component, OnInit } from '@angular/core';

export type SelectedFlow = 'start' | 'about';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  selected: SelectedFlow;

  constructor() { }

  onSelected(selected: SelectedFlow): void {
    this.selected = selected;
  }
}
