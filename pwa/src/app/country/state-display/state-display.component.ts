import { Component, OnInit, Input } from '@angular/core';
import { State } from '../country.component';

@Component({
  selector: 'app-state-display',
  templateUrl: './state-display.component.html',
  styleUrls: ['./state-display.component.less']
})
export class StateDisplayComponent implements OnInit {

  @Input() selected: State;

  constructor() { }

  ngOnInit(): void {
  }

}
