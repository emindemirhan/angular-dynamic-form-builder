import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormBuilder } from 'src/app/modules/DynamicFormBuilder';
import { DynamicFormFields } from 'src/app/modules/DynamicFormFields';
import { DynamicValidators } from 'src/app/modules/DynamicValidators';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() source!: DynamicFormBuilder;
  @Output() submitForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  fb = inject(FormBuilder);
  dynamicFormGroup: FormGroup = this.fb.group({});

  ngOnInit(): void {
    if (this.source && this.source.formControls) {
      this.initializeForm();
    }
  }

  initializeForm(): void {
    let formGroup: { [key: string]: any } = {};
    this.source.formControls.forEach((section) => {
      if (section.fields) {
        section.fields.forEach((control: DynamicFormFields) => {
          let controlValidators: any[] = [];
          control.validators?.forEach((val: DynamicValidators) => {
            if (val.validatorName === 'required') {
              controlValidators.push(Validators.required);
            }
            if (val.validatorName === 'email') {
              controlValidators.push(Validators.email);
            }
            if (val.validatorName === 'minLength') {
              controlValidators.push(Validators.minLength(val.minLength ?? 0));
            }
            if (val.validatorName === 'pattern') {
              controlValidators.push(Validators.pattern(val.pattern || ''));
            }
            if (val.validatorName === 'maxLength') {
              controlValidators.push(Validators.maxLength(val.maxLength ?? 0));
            }
          });
          if (control.type === 'dynamic') {
            let dynamicControls: { [key: string]: any } = {};
            control.options?.forEach((option) => {
              dynamicControls[option.value!] = this.fb.control(false);
            });
            formGroup[control.name ?? ''] = this.fb.group(dynamicControls);
          } else {
            formGroup[control.name ?? ''] = [
              control.value || '',
              controlValidators,
            ];
          }
        });
      }
    });

    this.dynamicFormGroup = this.fb.group(formGroup);
  }

  onSubmit(form: FormGroup): void {
    this.submitForm.emit(form);
  }

  resetFormValue() {
    this.dynamicFormGroup.reset();
    this.dynamicFormGroup.markAsPristine();
    this.dynamicFormGroup.markAsUntouched();
    this.dynamicFormGroup.updateValueAndValidity();
  }

  getValidationErrors(control: DynamicFormFields): string {
    let errorMessage: string = '';
    const dynamicFormControl = this.dynamicFormGroup.get(control.name ?? '');

    control.validators?.forEach((val: DynamicValidators) => {
      if (dynamicFormControl?.hasError(val.validatorName!)) {
        errorMessage = val.message || '';
      }
    });

    return errorMessage;
  }
}
