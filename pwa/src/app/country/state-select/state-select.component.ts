import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../country.component';

@Component({
  selector: 'app-state-select',
  templateUrl: './state-select.component.html',
  styleUrls: ['./state-select.component.less']
})
export class StateSelectComponent {

  @Output() selected = new EventEmitter<State>();

  constructor() { }

  select(selected: State): void {
    this.selected.emit(selected);
  }

}
