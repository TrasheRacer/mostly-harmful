import { Component, OnInit, Input } from '@angular/core';
import { SelectedFlow } from '../home.component';

@Component({
  selector: 'home-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.less']
})
export class ForwardComponent implements OnInit {

  @Input() selected: SelectedFlow;

  constructor() { }

  ngOnInit(): void {
  }

}
