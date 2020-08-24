import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../language.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forward-language',
  templateUrl: './forward-language.component.html',
})
export class ForwardLanguageComponent {

  @Input() selected: Language;

  constructor(private router: Router, private translateService: TranslateService) { }

  accept(accepted: Language): void {
    console.log('accepted language', accepted);
    this.translateService.use(accepted);
    this.router.navigateByUrl('/home');
  }

}
