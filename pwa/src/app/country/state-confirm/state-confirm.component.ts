import { Component, OnInit, Input } from '@angular/core';
import { State } from '../country.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-confirm',
  templateUrl: './state-confirm.component.html',
})
export class StateConfirmComponent {

  @Input() selected: State;

  constructor(private router: Router) { }

  accept(accepted: State): void {
    this.router.navigateByUrl('/home/' + accepted);
  }

}
