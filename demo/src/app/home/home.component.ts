import { Component, OnInit } from '@angular/core';

const soundtrack = new Audio('./../../assets/audio/solidarity.mp3');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickSolidarity() {
    soundtrack.load();
    soundtrack.play();
  }

}
