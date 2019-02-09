import { Component } from '@angular/core';
import { FieldType } from '@cgx-forms/core';

@Component({
  selector: 'cgx-form-dynamic-select',
  template: `
    <kendo-dropdownlist
      [class.k-state-invalid]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [data]="to.options | formlySelectOptions:field | async"
      [textField]="'label'"
      [valueField]="'value'"
    >
    </kendo-dropdownlist>
  `,
})
export class FormlyFieldSelect extends FieldType {
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
