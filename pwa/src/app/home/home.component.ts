import { Component, OnInit } from '@angular/core';

import { NoSelection } from './../../globals'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selection: string = 'none'
  thingList = ['thing-1', 'thing-2', 'thing-3', 'thing-4', 'thing-5', 'thing-6']

  constructor() { }

  ngOnInit(): void {
  }

  setSelection(selection: string) {
    this.selection = selection
  }
}
