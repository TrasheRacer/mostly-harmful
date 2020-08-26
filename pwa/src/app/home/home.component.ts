import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selection: string = 'none'
  selectionList = ['start', 'settings']

  constructor() { }

  ngOnInit(): void {
  }

  setSelection(selection: string) {
    this.selection = selection
  }
}
