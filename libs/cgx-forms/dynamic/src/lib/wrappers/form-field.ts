import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@cgx-forms/core';

@Component({
  selector: 'cgx-wrapper-dynamic-form-field',
  template: `
  <div class="form-group" [class.has-error]="showError">
    <label [for]="id" class="k-form-field">
      <span *ngIf="to.label && to.hideLabel !== true">
        {{ to.label }}
        <span *ngIf="to.required && to.hideRequiredMarker !== true" class="k-required">*</span>
      </span>
      <ng-container #fieldComponent></ng-container>
    </label>
    <formly-validation-message
      *ngIf="showError"
      class="k-field-info k-required"
      [field]="field">
    </formly-validation-message>
    <small *ngIf="to.description" class="form-text text-muted">{{ to.description }}</small>
    </div>
    
  `,
})
export class FormlyWrapperFormField extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;
}