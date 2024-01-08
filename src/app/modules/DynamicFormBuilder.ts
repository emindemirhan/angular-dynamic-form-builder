import { DynamicFormControl } from './DynamicFormControl';

export interface DynamicFormBuilder {
  formTitle?: string;
  formControls: DynamicFormControl[];
  saveButtonTitle?: string;
  resetButtonTitle?: string;
}
