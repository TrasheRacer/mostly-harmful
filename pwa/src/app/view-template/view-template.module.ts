import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';
import { DisplayComponent } from './display/display.component';
import { SelectComponent } from './select/select.component';
import { ConfirmComponent } from './confirm/confirm.component';



@NgModule({
  declarations: [BackComponent, DisplayComponent, SelectComponent, ConfirmComponent],
  imports: [
    CommonModule
  ],
  exports: [BackComponent, DisplayComponent, SelectComponent, ConfirmComponent],

})
export class ViewTemplateModule { }
