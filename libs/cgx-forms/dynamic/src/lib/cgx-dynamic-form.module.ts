import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { FormlyModule } from '@cgx-forms/core';
import { FormlySelectModule } from '@cgx-forms/core/select';
import { CGX_DYNAMIC_FORM_CONFIG, FIELD_TYPE_COMPONENTS } from './cgx-dynamic-form.config';

@NgModule({
  declarations: FIELD_TYPE_COMPONENTS,
  imports: [
    CommonModule,
    DropDownsModule,
    InputsModule,
    DateInputsModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forRoot(CGX_DYNAMIC_FORM_CONFIG),
  ],
})
export class CGXDynamicFormModule {}
