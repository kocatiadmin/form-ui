import { FormGroup, FormControl } from '@angular/forms';
import { IFormErrors } from './interfaces/form-errors.interface';
import { IValidationRules } from './interfaces/validation-rules.interface';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

export abstract class FormWrapper<T> {
  public formGroup: FormGroup;
  public formErrors: IFormErrors = {};
  public dataModel: T;
  public dataModelValidation: IValidationRules;

  abstract onFormLoad(dataModel?: T): void;
  abstract transformData(): T;

  setValidators(validationRules: IValidationRules) {
    Object.keys(this.formGroup.controls).forEach((control: string) => {
      this.formGroup.controls[control].clearValidators();
      if (validationRules.hasOwnProperty(control)) {
        this.formGroup.controls[control].setValidators(validationRules[control].validators);
        this.formGroup.controls[control].updateValueAndValidity();
      }
    });
    this.dataModelValidation = validationRules;
  }

  onValidate(): Observable<boolean> {
    this.formGroup.valueChanges.subscribe(() => this.onValueChanged());

    return Observable.create((observer: any) => {
      if (this.formGroup.pending) {
        this.formGroup.statusChanges
          .pipe(filter(s => s !== 'PENDING'), take(1))
          .subscribe(() => {
            observer.next(this.checkFormErrors());
            return observer.complete();
          })
      } else {
        observer.next(this.checkFormErrors());
        return observer.complete();
      }
    })
  }

  checkFormErrors() {
    let isFormValid = true;
    this.formErrors = {};
    Object.keys(this.formGroup.controls).forEach((control: string) => {
      if (
        this.formGroup.controls[control] &&
        this.formGroup.controls[control].invalid &&
        this.dataModelValidation &&
        this.dataModelValidation[control]
      ) {
        this.formErrors[control] = this.dataModelValidation[control]['messages'][Object.keys(this.formGroup.controls[control].errors)[0]];
        isFormValid = false;
      }
    });
    return isFormValid;
  }

  private onValueChanged() {
    if (this.formGroup.pending) {
      this.formGroup.statusChanges
        .pipe(filter(s => s === 'INVALID'), take(1))
        .subscribe(() => {
          this.checkFormErrors();
        });
    } else if (this.formGroup.invalid) {
      this.checkFormErrors();
    } else {
      this.formErrors = {};
    }
  }

}