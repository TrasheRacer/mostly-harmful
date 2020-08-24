import { Component, OnInit, Input } from '@angular/core';
import { SelectLanguageComponent } from '../select-language/select-language.component';

@Component({
  selector: 'app-display-language',
  templateUrl: './display-language.component.html',
  styleUrls: ['./display-language.component.less']
})
export class DisplayLanguageComponent {

  @Input() selected: SelectLanguageComponent;

  constructor() { }

}
