import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormContent } from './constants/dynamic-form-content';
import { DynamicFormBuilder } from './modules/DynamicFormBuilder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-dynamic-form-builder';
  formContent = FormContent as DynamicFormBuilder;

  onSubmit(form: FormGroup): void {
    if (form.valid) console.log(form.value, 'app component');
  }
}
