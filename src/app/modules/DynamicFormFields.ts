import { DynamicValidators } from './DynamicValidators';
import { Options } from './Options';

export interface DynamicFormFields {
  type: string;
  label: string;
  name: string;
  value?: string;
  mask?: string;
  validators?: DynamicValidators[];
  required?: boolean;
  validation?: {
    pattern: string;
  };
  options?: Options[];
}
