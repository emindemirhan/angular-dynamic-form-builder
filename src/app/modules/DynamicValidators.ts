export interface DynamicValidators {
  validatorName?: string;
  required?: boolean;
  message?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  email?: string;
}
