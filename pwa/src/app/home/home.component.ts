import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = 'home';
  selection = 'none';
  selectionList = ['identity', 'help', 'settings', 'about'];

  constructor() { }

  ngOnInit(): void {
  }

  setSelection(selection: string): void {
    this.selection = selection;
  }
}
