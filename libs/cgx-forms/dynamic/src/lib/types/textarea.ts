import { Component } from '@angular/core';
import { FieldType } from '@cgx-forms/core';

@Component({
  selector: 'cgx-form-dynamic-textarea',
  template: `
    <textarea class="k-textarea"
      [class.k-state-invalid]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"></textarea>
  `,
})
export class FormlyFieldTextArea extends FieldType {}
