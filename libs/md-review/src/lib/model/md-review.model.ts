import { FormlyFieldConfig } from "@cgx-forms/core";
import { ColumnLayout } from "@cgx-ui/layout";
import { CGXControlType} from '@cgx-ui/controls';

export interface authorization {
    name: string;
    authType: string;

}

export let authorizationFormModel: FormlyFieldConfig[] = [
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
            {
                className: ColumnLayout.TwoColumn,
                type: CGXControlType.TextBox,
                key: 'firstName',
                templateOptions: {
                    label: 'First Name',
                    required: true,
                },
                validation: { messages: { required: 'You need to provide a name.' } }
            },
            {
                className: ColumnLayout.TwoColumn,
                type: CGXControlType.TextBox,
                key: 'lastName',
                templateOptions: {
                    label: 'Last Name',
                },
                expressionProperties: {
                    'templateOptions.disabled': '!model.firstName',
                },
            },
        ],
    },
    {
        className: 'section-label',
        template: '<hr /><div><strong>Address:</strong></div>',
    },
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
            {
                className: ColumnLayout.TwoColumn,
                type: CGXControlType.TextBox,
                key: 'street',
                templateOptions: {
                    label: 'Street',
                },
            },
            {
                className: ColumnLayout.FourColumn,
                type: CGXControlType.Select,
                key: 'cityName',
                templateOptions: {
                    label: 'City',
                    options: [
                        { label: 'Snickers', value: 'snickers' },
                        { label: 'Baby Ruth', value: 'baby_ruth' },
                        { label: 'Milky Way', value: 'milky_way' },
                    ],
                },
            },
            {
                className: ColumnLayout.FourColumn,
                type: CGXControlType.NumericTextBox,
                key: 'zip',
                templateOptions: {
                    label: 'Zip',
                    max: 99999,
                    min: 0
                },
            },
        ],
    },

    { template: '<hr />' },
    {
        fieldGroupClassName: 'row',
        fieldGroup: [
            {
                className: ColumnLayout.TwoColumn,
                type: CGXControlType.TextArea,
                key: 'otherinput',
                templateOptions: {
                    label: 'Other Input',
                },
            },
            {
                className: ColumnLayout.FourColumn,
                type: CGXControlType.Switch,
                key: 'otherinput1',
                templateOptions: {
                    label: 'TextArea',
                    required: true,
                },
                validation: { messages: { required: 'You need to provide a name.' } }
            },
            {
                className: ColumnLayout.FourColumn,
                type: CGXControlType.Autocomplete,
                key: 'autocomplete',
                templateOptions: {
                    label: 'Autocomplete',
                    options: [
                        { label: 'Snickers', value: 'snickers' },
                        { label: 'Baby Ruth', value: 'baby_ruth' },
                        { label: 'Milky Way', value: 'milky_way' },
                    ],
                },
            },
        ],
    },

    { template: '<hr />' },
    
    {
        type: CGXControlType.CheckBox,
        key: 'otherToo',
        templateOptions: {
            label: 'Other Checkbox',
        },
    },
    {
        type: CGXControlType.DatePicker,
        key: 'otherToo',
        templateOptions: {
            label: 'DatePicker',
        },
    },
    {
        type: CGXControlType.MultiSelect,
        key: 'multiselect',
        templateOptions: {
            label: 'Multiselect',
            options: [
                { label: 'Snickers', value: 'snickers' },
                { label: 'Baby Ruth', value: 'baby_ruth' },
                { label: 'Milky Way', value: 'milky_way' },
            ],
        },
    },
];
