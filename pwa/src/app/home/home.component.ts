import { Component, OnInit } from '@angular/core';

export type SelectedFlow = 'none' | 'start' | 'about';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  selected: SelectedFlow = 'none'

  constructor() { }

  onSelected(selected: SelectedFlow): void {
    this.selected = selected
  }
}
