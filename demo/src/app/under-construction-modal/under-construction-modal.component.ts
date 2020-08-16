import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

const soundtrack = new Audio('./../../assets/audio/ive-seen-footage.mp3');

@Component({
  selector: 'app-under-construction-modal',
  templateUrl: './under-construction-modal.component.html',
  styleUrls: ['./under-construction-modal.component.css']
})
export class UnderConstructionModalComponent {

  constructor(private modalService: NgbModal) {}

  open(content) {
    soundtrack.load();
    soundtrack.play();
    return this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result;
  }
}
