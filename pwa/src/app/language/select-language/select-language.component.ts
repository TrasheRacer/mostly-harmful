import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Language } from '../language.component';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.less']
})
export class SelectLanguageComponent {

  @Output() selected = new EventEmitter<Language>();

  constructor() { }

  select(selected: Language): void {
    this.selected.emit(selected);
  }
}
