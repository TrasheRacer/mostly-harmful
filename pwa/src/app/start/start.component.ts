import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  name = 'help' // TODO: rename this to HelpComponent
  selection: string = 'none'
  selectionList = ['record-video', 'stream-audio', 'launch-guide', 'upload-event']

  constructor() { }

  ngOnInit(): void {
  }

  setSelection(selection: string) {
    this.selection = selection
  }

}
