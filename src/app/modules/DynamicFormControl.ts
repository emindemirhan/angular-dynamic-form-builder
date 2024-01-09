import { DynamicFormFields } from './DynamicFormFields';

export interface DynamicFormControl {
  type: string;
  label: string;
  fields: DynamicFormFields[];
}
