import { Component, OnInit, Input } from '@angular/core';
import { SelectedFlow } from '../home.component';
import { State } from 'src/app/country/country.component';

@Component({
  selector: 'app-home-forward',
  templateUrl: './forward.component.html',
})
export class ForwardComponent implements OnInit {

  @Input() selected: SelectedFlow;
  @Input() state: State;

  constructor() { }

  ngOnInit(): void {
  }

}
