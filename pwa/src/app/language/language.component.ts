import { Component, OnInit } from '@angular/core';
import { SelectLanguageComponent } from './select-language/select-language.component';

export type SelectedLanguage = 'english' | 'german';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less']
})
export class LanguageComponent {

  selected: SelectedLanguage;

  constructor() { }

  onSelected(selected: SelectedLanguage): void {
    this.selected = selected;
  }
}
