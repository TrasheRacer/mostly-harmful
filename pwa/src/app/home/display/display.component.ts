import { Component, OnInit, Input } from '@angular/core';
import { SelectedFlow } from '../home.component';

@Component({
  selector: 'app-home-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.less']
})
export class DisplayComponent implements OnInit {

  @Input() selected: SelectedFlow;

  constructor() { }

  ngOnInit(): void {
  }

}
