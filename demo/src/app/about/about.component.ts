import { Component, OnInit } from '@angular/core';

const soundtrack = new Audio('./../../assets/audio/nobody-speak.mp3');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickVibes() {
    soundtrack.load();
    soundtrack.play();
  }

}
