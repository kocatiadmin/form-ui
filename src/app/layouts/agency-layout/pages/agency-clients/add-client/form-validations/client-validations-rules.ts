import { IValidationRules } from '../../../form-wrapper/interfaces/validation-rules.interface';
import { Validators } from '@angular/forms';

export class ClientValidationRules {
  public static readonly CLIENT_VALIDATIONS: IValidationRules = {
    name: {
      validators: [Validators.required],
      messages: {
        required: 'Name required'
      }
    },
    taxId: {
      validators: [Validators.required],
      messages: {
        required: 'Tax ID required'
      }
    },
    email: {
      validators: [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
      messages: {
        required: 'Email required',
        pattern: 'Email invalid'
      }
    },
    phoneNo: {
      validators: [Validators.required, Validators.pattern('^[0-9]{10}$')],
      messages: {
        required: 'Phone No required',
        pattern: 'Phone No invalid'
      }
    },
    website: {
      validators: [Validators.required],
      messages: {
        required: 'Website required'
      }
    },
    streetAddress: {
      validators: [Validators.required],
      messages: {
        required: 'Street Address required'
      }
    },
    city: {
      validators: [Validators.required],
      messages: {
        required: 'City required'
      }
    },
    state: {
      validators: [Validators.required],
      messages: {
        required: 'State required'
      }
    },
    zipCode: {
      validators: [Validators.required],
      messages: {
        required: 'Zipcode required'
      }
    },
    contactName1: {
      validators: [Validators.required],
      messages: {
        required: 'Name required'
      }
    },
    contactPhoneNo1: {
      validators: [Validators.required],
      messages: {
        required: 'Phone No required'
      }
    },
    contactEmailId1: {
      validators: [Validators.required],
      messages: {
        required: 'Email Id required'
      }
    },
    contactDesignation1: {
      validators: [Validators.required],
      messages: {
        required: 'Designation required'
      }
    },
    contactName2: {
      validators: [Validators.required],
      messages: {
        required: 'Name required'
      }
    },
    contactPhoneNo2: {
      validators: [Validators.required],
      messages: {
        required: 'Phone No required'
      }
    },
    contactEmailId2: {
      validators: [Validators.required],
      messages: {
        required: 'Email Id required'
      }
    },
    contactDesignation2: {
      validators: [Validators.required],
      messages: {
        required: 'Designation required'
      }
    },
    policyBucketsDropdown: {
      validators: [Validators.required],
      messages: {
        required: 'Select one or more policy bucket'
      }
    }
  }
}