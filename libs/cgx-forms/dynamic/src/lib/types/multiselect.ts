import { Component } from '@angular/core';
import { FieldType } from '@cgx-forms/core';

@Component({
  selector: 'cgx-form-dynamic-multiselect',
  template: `
    <kendo-multiselect
      [class.k-state-invalid]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [data]="to.options | formlySelectOptions:field | async"
      [textField]="'label'"
      [valueField]="'value'"
    >
    </kendo-multiselect>
  `,
})
export class FormlyFieldMultiSelect extends FieldType {
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
