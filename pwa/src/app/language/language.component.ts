import { Component, OnInit } from '@angular/core';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'english' | 'german';

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
