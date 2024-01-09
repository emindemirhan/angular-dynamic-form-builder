import { DynamicValidators } from './DynamicValidators';
import { Options } from './Options';

export interface DynamicFormControl {
  value?: string;
  type: string;
  label?: string;
  name?: string;
  required?: boolean;
  validators?: DynamicValidators[];

  mask?: string;
  options?: Options[];
  fields?: DynamicFormControl[];
}
