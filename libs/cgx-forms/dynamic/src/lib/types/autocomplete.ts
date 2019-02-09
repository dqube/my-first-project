import { Component } from '@angular/core';
import { FieldType } from '@cgx-forms/core';

@Component({
  selector: 'cgx-form-dynamic-autocomplete',
  template: `
    <kendo-autocomplete
    [class.k-state-invalid]="showError"
    [formControl]="formControl"
    [formlyAttributes]="field"
    [data]="to.options | formlySelectOptions:field | async"
    [placeholder]="to.placeholder"
    [valueField]="'label'"
>
</kendo-autocomplete>
  `,
})
export class FormlyFieldAutocomplete extends FieldType {
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
