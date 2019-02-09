import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { authorization, authorizationFormModel } from '../model/md-review.model';
import { FormlyFieldConfig } from '@cgx-forms/core';
import { LookupService } from '@cgx-common/lookup';

@Component({
  selector: 'cgx-md-review-create',
  template: `
  <form [formGroup]="form" (ngSubmit)="submit(model)" class="k-form">
  <formly-form [form]="form" [fields]="fields" [model]="model">
    <div class="form-group text-right">
      <button type="submit" class="btn btn-info m-r-5 waves-effect waves-light">Save</button>
      <button type="cancel" class="btn btn-dark waves-effect waves-light">Cancel</button>
  </div>
  </formly-form>
 
</form>
  `,
  styles: []
})
export class CreateComponent implements OnInit {
  title = 'example';
    form = new FormGroup({});
    model: authorization = { name: 'Test Name', authType: '1' };
    fields: FormlyFieldConfig[];

    panels = [
        {
            active: true,
            name: 'Authorization'
        }
    ];

    submit(model) {
        if (this.form.valid) {
            console.log(model);
        }
    }
    isCollapsed = false;
    triggerTemplate = null;
    /**
     *
     */
    constructor(private lookup: LookupService) {
        this.fields = lookup.bindLookup(authorizationFormModel);
    }

  ngOnInit() {
  }

}
