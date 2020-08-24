import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectedFlow } from '../home.component';

@Component({
  selector: 'app-home-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {

  @Output() selected = new EventEmitter<SelectedFlow>();

  constructor() { }

  select(selected: SelectedFlow): void {
    this.selected.emit(selected);
  }
}
