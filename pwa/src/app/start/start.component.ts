import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  name = 'help'; // TODO: rename this to HelpComponent
  selection = 'none';
  selectionList = ['record-video', 'stream-audio', 'launch-guide', 'upload-event'];

  constructor() { }

  ngOnInit(): void {
  }

  setSelection(selection: string): void {
    this.selection = selection;
  }

}
