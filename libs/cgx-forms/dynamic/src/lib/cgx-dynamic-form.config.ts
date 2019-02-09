import { ConfigOption } from '@cgx-forms/core';
import {
  FormlyFieldInput,
  FormlyFieldTextArea,
  FormlyFieldCheckbox,
  FormlyFieldRadio,
  FormlyFieldSelect,
  FormlyFieldNumber,
  FormlyFieldSwitch,
  FormlyFieldAutocomplete,
  FormlyFieldMultiSelect,
  FormlyFieldDate
} from './types/types';
import { FormlyWrapperFormField } from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
  // types
  FormlyFieldInput,
  FormlyFieldNumber,
  FormlyFieldTextArea,
  FormlyFieldCheckbox,
  FormlyFieldRadio,
  FormlyFieldSelect,
  FormlyFieldSwitch,
  FormlyFieldAutocomplete,
  FormlyFieldMultiSelect,
  FormlyFieldDate,
  // wrappers
  FormlyWrapperFormField,
];

export const CGX_DYNAMIC_FORM_CONFIG: ConfigOption = {
  types: [
    {
      name: 'input',
      component: FormlyFieldInput,
      wrappers: ['form-field'],
    },
    {
      name: 'number',
      component: FormlyFieldNumber,
      wrappers: ['form-field'],
    },
    {
      name: 'textarea',
      component: FormlyFieldTextArea,
      wrappers: ['form-field'],
    },
    {
      name: 'checkbox',
      component: FormlyFieldCheckbox,
      wrappers: ['form-field'],
    },
    {
      name: 'radio',
      component: FormlyFieldRadio,
      wrappers: ['form-field'],
    },
    {
      name: 'select',
      component: FormlyFieldSelect,
      wrappers: ['form-field'],
    },
    {
      name: 'autocomplete',
      component: FormlyFieldAutocomplete,
      wrappers: ['form-field'],
    },
    {
      name: 'multiselect',
      component: FormlyFieldMultiSelect,
      wrappers: ['form-field'],
    },
    {
      name: 'switch',
      component: FormlyFieldSwitch,
      wrappers: ['form-field'],
    },
    {
      name: 'date',
      component: FormlyFieldDate,
      wrappers: ['form-field'],
    },
  ],
  wrappers: [
    { name: 'form-field', component: FormlyWrapperFormField },
  ],
};
