import { Component, OnInit, Input } from '@angular/core';
import { SelectedLanguage } from '../language.component';

@Component({
  selector: 'app-forward-language',
  templateUrl: './forward-language.component.html',
  styleUrls: ['./forward-language.component.less']
})
export class ForwardLanguageComponent {

  @Input() selected: SelectedLanguage;

  constructor() { }

}
