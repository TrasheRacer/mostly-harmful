import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectedFlow } from '../home.component';

@Component({
  selector: 'app-home-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent {

  @Output() selected = new EventEmitter<SelectedFlow>();

  constructor() { }

  select(selected: SelectedFlow): void {
    this.selected.emit(selected);
  }
}
