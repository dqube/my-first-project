import { Component } from '@angular/core';
import { FieldType } from '@cgx-forms/core';

@Component({
  selector: 'cgx-form-dynamic-input',
  template: `
    <input class="k-textbox"
      [class.k-state-invalid]="showError"
      [type]="to.type || 'text'"
      [formControl]="formControl"
      [formlyAttributes]="field" />
  `,
})
export class FormlyFieldInput extends FieldType {}
