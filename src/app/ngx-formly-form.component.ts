import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ngx-formly-form',
  templateUrl: './ngx-formly-form.component.html',
  styles: [
    `.error {
      color: red;
    }`
  ],
})

export class NgxFormlyFormComponent {
  form: FormGroup = new FormGroup({});
  @Input() data;
  @Input() formDataObj;
  submittedData;


}
