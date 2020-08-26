import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() name: string
  @Input() selection: string
  @Input() selectionList: string[]

  constructor() { }

  ngOnInit(): void {
  }

  onSelection(selection: string): void {
    this.selection = selection;
  }

}
