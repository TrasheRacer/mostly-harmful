import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
})
export class ReasonComponent implements OnInit {
  selectedReason = '';
  selectedOfficer = '';

  constructor() { }

  ngOnInit(): void {
  }

  onReason(reason: string): void {
    this.selectedReason = reason;
  }

  onOfficer(officer: string): void {
    this.selectedOfficer = officer;
  }

}
