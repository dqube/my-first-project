import { Injectable } from '@angular/core';
import { FormlyFieldConfig, FormlyFieldLookup } from '@cgx-forms/core';
import { Lookup } from './lookup.model';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor() { }
  codeLookups: FormlyFieldLookup[] = [];
  bindLookup(fields: FormlyFieldConfig[] = []) {
    this._getCodeLookup(fields);
    let lookups: Lookup[] = this._getLookups(this.codeLookups);
    this._bindLookup(fields, lookups);
    return fields;
  }


  private _bindLookup(fields: FormlyFieldConfig[], lookups: Lookup[]) {
    fields.forEach((f) => {
      if (f.fieldGroup && f.fieldGroup.length > 0) {
        this._bindLookup(f.fieldGroup, lookups);
      }
      // if(f.fieldArray){
      //   this._bindLookup(f.fieldArray,lookups);
      // }
      if (f.templateOptions) {
        let templateOptions = f.templateOptions;
        if (templateOptions.lookup) {
          f.templateOptions.options = lookups.filter(
            lookup => lookup.categoryId === templateOptions.lookup.id);;
        }
      }
    });
  }

  //this._buildForm( fieldGroup);

  private _getCodeLookup(fields: FormlyFieldConfig[]) {
    fields.forEach((f) => {
      if (f.fieldGroup && f.fieldGroup.length > 0) {
        this._getCodeLookup(f.fieldGroup);
      }
      // if(f.fieldArray){
      //   this._getCodeLookup(f.fieldGroup);
      // }
      if (f.templateOptions) {
        let templateOptions = f.templateOptions;
        if (templateOptions.lookup) {
          this.codeLookups.push(templateOptions.lookup);
        }
      }
    });
  }



  private _getLookups(codeLookups: FormlyFieldLookup[] = []): Lookup[] {
    return [
      { id: 1, desc: 'test1', categoryId: 1, value: '1', label: 'Inpatient' },
      { id: 2, desc: 'test2', categoryId: 1, value: '2', label: 'Outpatient' },
      { id: 3, desc: 'test2', categoryId: 2, value: '2', label: 'BHInpatient' },
      { id: 4, desc: 'test2', categoryId: 2, value: '2', label: 'BHOutpatient' }
    ]
  }
}