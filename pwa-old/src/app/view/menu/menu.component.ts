import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

  // @Input() viewName: string

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
