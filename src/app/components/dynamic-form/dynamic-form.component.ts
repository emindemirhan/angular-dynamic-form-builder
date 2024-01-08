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
import { DynamicFormControl } from 'src/app/modules/DynamicFormControl';
import { DynamicValidators } from 'src/app/modules/DynamicValidators';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() source!: DynamicFormBuilder;
  @Output() submit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  fb = inject(FormBuilder);
  dynamicFormGroup: FormGroup = this.fb.group({});

  ngOnInit(): void {
    if (this.source.formControls) {
      this.initializeForm();
    }
  }

  initializeForm(): void {
    let formGroup: { [key: string]: [any, any[]] } = {};
    this.source.formControls.forEach((section) => {
      if (section.fields) {
        section.fields.forEach((control: DynamicFormControl) => {
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

          formGroup[control.name ?? ''] = [
            control.value || '',
            controlValidators,
          ];
        });
      }
    });

    this.dynamicFormGroup = this.fb.group(formGroup);
  }

  onSubmit(form: FormGroup): void {
    if (form.valid) {
      this.submit.emit(form);
      console.log(form.value);
    } else {
      console.log("Form doesn't send");
    }
  }

  resetFormValue() {
    this.dynamicFormGroup.reset();
  }

  getValidationErrors(control: DynamicFormControl): string {
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