import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'dynamicForm';
  person = {
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

}
