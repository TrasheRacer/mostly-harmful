import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
})
export class IdentityComponent implements OnInit {
  officer = '';
  identification = '';
  name = '';
  number = '';
  station = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.officer = params.officer;
    });
  }

  onIdentification(hasID: boolean) {
    if (hasID) {
      if (this.officer === 'police-officer') {
        this.identification = 'warrant-card';
      } else if (this.officer === 'in-uniform-pcso') {
        this.identification = 'designation-card';
      }
    } else {
      this.identification = 'none';
    }
  }
}
