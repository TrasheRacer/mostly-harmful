import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectedLanguage } from '../language.component';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.less']
})
export class SelectLanguageComponent {

  @Output() selected = new EventEmitter<SelectedLanguage>();

  constructor() { }

  select(selected: SelectedLanguage): void {
    this.selected.emit(selected);
  }
}
