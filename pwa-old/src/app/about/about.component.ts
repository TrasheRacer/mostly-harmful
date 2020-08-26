import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LegalSystem } from './../../globals'

export type ExternalLink = 'github' | 'signal'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  viewName = 'about'
  legalSystem: LegalSystem

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const state = params.get('state');
      console.log(state)
      if (state === 'england' || state === 'bavaria') { this.legalSystem = state; }
    });
  }
}
