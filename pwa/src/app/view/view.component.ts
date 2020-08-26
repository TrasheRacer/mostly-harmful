import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() name: string;
  @Input() selectionList: string[];
  @Input() save = false;

  selection = 'none';

  constructor() { }

  ngOnInit(): void {
  }

  onSelection(selection: string): void {
    this.selection = selection;
  }

}
