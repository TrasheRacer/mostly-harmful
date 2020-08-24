import { Component, OnInit } from '@angular/core';

export type Language = 'en' | 'de';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less']
})
export class LanguageComponent {

  selected: Language;

  constructor() {}

  onSelected(selected: Language): void {
    this.selected = selected;
  }
}
