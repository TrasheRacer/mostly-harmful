import { Component, OnInit, Input } from '@angular/core';
import { State } from '../country/country.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {

  @Input() state: State;
  
  constructor() { }

  ngOnInit(): void {
  }

}
