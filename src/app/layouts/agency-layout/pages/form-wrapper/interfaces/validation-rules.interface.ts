import { ValidatorFn } from '@angular/forms';

export interface IValidationRules {
  [propName: string]: IValidationRule;
}

export interface IValidationRule {
  validators: Array<ValidatorFn>;
  messages: any;
}