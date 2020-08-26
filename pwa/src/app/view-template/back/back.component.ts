import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  @Input() name: string

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.location.back()
  }

}
