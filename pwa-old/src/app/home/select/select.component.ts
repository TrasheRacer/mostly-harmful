import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SelectedFlow } from '../home.component';
import { State } from 'src/app/country/country.component';

@Component({
  selector: 'app-home-select',
  templateUrl: './select.component.html',
})
export class SelectComponent {

  @Input() state: State;
  @Output() selected = new EventEmitter<SelectedFlow>();

  constructor() { }

  select(selected: SelectedFlow): void {
    this.selected.emit(selected);
  }
}
