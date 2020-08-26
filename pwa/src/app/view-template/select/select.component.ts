import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() name: string;
  @Input() selectionList: string[];

  @Output() selectionEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(selection: string): void {
    this.selectionEvent.emit(selection);
  }

}
