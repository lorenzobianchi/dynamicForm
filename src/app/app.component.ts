import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dynamicForm';
  personOne = {
    firstName: {
      value: 'Jack',
      label: 'Firstname',
      type: 'text',
      validators: {
        required: true,
      }
    },
    surName: {
      value: 'Frusciante',
      label: 'Surname',
      type: 'text'
    },
    gender: {
      value: 'M',
      label: 'Gender',
      type: 'radio',
      options: [
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' }
      ]
    },
    twitter: {
      value: '@JFrusciante',
      label: 'Twitter',
      type: 'text'
    },
    age: {
      value: 32,
      label: 'Age',
      type: 'number',
      validators: {
        min: 18,
      },
    },
    city: {
      label: 'City',
      value: 'NY',
      type: 'select',
      options: [
        { label: '(choose one)', value: '' },
        { label: 'New York', value: 'NY' },
        { label: 'Los Angeles', value: 'LA' },
        { label: 'Salt Lake City', value: 'SLC' },
      ]
    }
  };

  person = {
    firstName: 'Pinco',
    surName: 'Palla',
    gender: 'M',
    age: 32,
  };

  personFields = <FormlyFieldConfig> [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        label: 'Firstname',
      },
      validators: {
        validation: Validators.required,
      },
      validation: {
        messages: {
          required: 'This field is required, you have to provide a value for it.',
        }
      }
    },
    {
      key: 'surName',
      type: 'input',
      templateOptions: {
        label: 'Surname',
      },
      validators: {
        validation: Validators.required,
      },
      validation: {
        messages: {
          required: 'This field is required, you have to provide a value for it.',
        }
      }
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        label: 'Gender',
        options: [{ value: 'Male', key: 'M' },{ value: 'Female', key: 'F' }],
      },
    },
    {
      key: 'age',
      type: 'input',
      templateOptios: {
        label: 'Age',
        type: 'number'
      },
      validators: {
        validation: Validators.min(18)
      },
      validation: {
        messages: {
          min: 'You need to specify a value greater or equal to 18',
        }
      }
    }
  ];


}
