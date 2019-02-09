import { Component } from '@angular/core';
import { FieldType } from '@cgx-forms/core';

@Component({
  selector: 'cgx-form-dynamic-number',
  template: `   
      <kendo-numerictextbox
      [class.k-state-invalid]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
        [min]="to['min']" [max]="to['max']" [autoCorrect]="to['autoCorrect']">
        </kendo-numerictextbox>
  `,
})
export class FormlyFieldNumber extends FieldType {}
