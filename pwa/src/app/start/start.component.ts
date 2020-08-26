import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  selection: string = 'none'
  selectionList = ['self-identify', 'stream-audio', 'launch-guide', 'upload-event']

  constructor() { }

  ngOnInit(): void {
  }

  setSelection(selection: string) {
    this.selection = selection
  }

}
