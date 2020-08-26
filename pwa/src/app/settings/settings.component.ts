import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  name = 'settings'
  selection: string = 'none'
  selectionList = ['set-language', 'set-legal-district', 'reset-user-id']

  constructor() { }

  ngOnInit(): void {
  }

  setSelection(selection: string) {
    this.selection = selection
  }


}
