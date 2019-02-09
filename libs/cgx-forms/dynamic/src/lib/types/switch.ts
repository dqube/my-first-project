import { Component } from '@angular/core';
import { FieldType } from '@cgx-forms/core';

@Component({
  selector: 'cgx-form-dynamic-switch',
  template: `   
      <kendo-switch
      [class.k-state-invalid]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"       
        ></kendo-switch>
  `,
})
export class FormlyFieldSwitch extends FieldType {}
