import { NgModule } from '@angular/core';
import { MdReviewComponent } from './md-review.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@cgx-forms/core';
import { CGXDynamicFormModule } from '@cgx-forms/dynamic';

@NgModule({
  declarations: [MdReviewComponent, ListComponent, CreateComponent],
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    CGXDynamicFormModule,
  ],
  exports: [MdReviewComponent, ListComponent, CreateComponent]
})
export class MdReviewModule { }
