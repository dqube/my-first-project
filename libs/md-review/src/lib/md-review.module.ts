import { NgModule } from '@angular/core';
import { MdReviewComponent } from './md-review.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@cgx-forms/core';
import { CGXDynamicFormModule } from '@cgx-forms/dynamic';
import { CGXGridModule } from '@cgx-ui/controls';

@NgModule({
  declarations: [MdReviewComponent, ListComponent, CreateComponent],
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    CGXDynamicFormModule,
    CGXGridModule
  ],
  exports: [MdReviewComponent, ListComponent, CreateComponent]
})
export class MdReviewModule { }
