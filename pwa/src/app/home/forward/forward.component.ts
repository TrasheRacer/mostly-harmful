import { Component, OnInit, Input } from '@angular/core';
import { SelectedFlow } from '../home.component';

@Component({
  selector: 'app-home-forward',
  templateUrl: './forward.component.html',
})
export class ForwardComponent implements OnInit {

  @Input() selected: SelectedFlow;

  constructor() { }

  ngOnInit(): void {
  }

}
