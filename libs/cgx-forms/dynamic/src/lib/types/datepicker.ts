import { Component } from '@angular/core';
import { FieldType } from '@cgx-forms/core';

@Component({
  selector: 'cgx-form-dynamic-datepicker',
  template: `   
     
        <kendo-datepicker
        [class.k-state-invalid]="showError"
        [formControl]="formControl"
        [formlyAttributes]="field"
    ></kendo-datepicker>
  `,
})
export class FormlyFieldDate extends FieldType {}