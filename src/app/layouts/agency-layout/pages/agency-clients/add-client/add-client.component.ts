import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Form } from '@angular/forms';
import { FormWrapper } from '../../form-wrapper/form-wrapper';
import { ClientModel } from '../../models/client.model';
import { KeyValue } from '@angular/common';
import { ClientService } from '../services/client.service';
import { SelectItem } from 'primeng/api';
import { AgencyConstants } from '../../../constants/agency.constants';
import { ClientValidationRules } from './form-validations/client-validations-rules';
import { ClientPolicyBucketModel } from '../../models/client-policy-bucket.model';
import { PolicyBucketModel } from '../../models/policy-bucket.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent extends FormWrapper<ClientModel> implements OnInit {
  statesList: Array<KeyValue<string, string>>;
  policyBuckets: Array<PolicyBucketModel>;
  policyDropdownItems: Array<SelectItem>;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private toastr: ToastrService) { 
    super();
  }

  ngOnInit() {
    this.setDefaultData();
  }

  setDefaultData() {
    this.statesList = this.clientService.getStatesList();
    this.clientService.getAgencyPolicyBuckets().subscribe((policies: Array<PolicyBucketModel>) => {
      this.policyBuckets = policies;
      this.policyDropdownItems = policies.map((policy: PolicyBucketModel) => {
        return {
          label: AgencyConstants.policyTypeLabelMap.get(policy.policyType) + ' - ' + policy.name,
          value: policy.id 
        }
      });      
      this.onFormLoad();
    });
  }

  onFormLoad(dataModel?: ClientModel) {
    this.dataModel = dataModel ? dataModel : new ClientModel();

    this.formGroup = this.formBuilder.group({
      name: [this.dataModel.name],
      taxId: [this.dataModel.taxId],
      email: [this.dataModel.email],
      phoneNo: [this.dataModel.phoneNo],
      website: [this.dataModel.website],
      streetAddress: [this.dataModel.streetAddress],
      city: [this.dataModel.city],
      state: [this.dataModel.state],
      zipCode: [this.dataModel.zipCode],
      contactName1: [this.dataModel.contactDetailsList[0].name],
      contactPhoneNo1: [this.dataModel.contactDetailsList[0].phoneNo],
      contactEmailId1: [this.dataModel.contactDetailsList[0].emailId],
      contactDesignation1: [this.dataModel.contactDetailsList[0].designation],
      contactName2: [this.dataModel.contactDetailsList[1].name],
      contactPhoneNo2: [this.dataModel.contactDetailsList[1].phoneNo],
      contactEmailId2: [this.dataModel.contactDetailsList[1].emailId],
      contactDesignation2: [this.dataModel.contactDetailsList[1].designation],
      policyBucketsDropdown: [this.getPolicyItemsFormatted(this.dataModel.policyBuckets)],
      policyBuckets: this.formBuilder.array([])
    });

    this.setValidators(ClientValidationRules.CLIENT_VALIDATIONS);
  }

  transformData() {
    const clientModel = new ClientModel();
    clientModel.name = this.formGroup.value.name;
    clientModel.taxId = this.formGroup.value.taxId;
    clientModel.email = this.formGroup.value.email;
    clientModel.phoneNo = this.formGroup.value.phoneNo;
    clientModel.website = this.formGroup.value.website;
    clientModel.streetAddress = this.formGroup.value.streetAddress;
    clientModel.city = this.formGroup.value.city;
    clientModel.state = this.formGroup.value.state;
    clientModel.zipCode = this.formGroup.value.zipCode;

    clientModel.contactDetailsList[0].name = this.formGroup.value.contactName1;
    clientModel.contactDetailsList[0].phoneNo = this.formGroup.value.contactPhoneNo1;
    clientModel.contactDetailsList[0].emailId = this.formGroup.value.contactEmailId1;
    clientModel.contactDetailsList[0].designation = this.formGroup.value.contactDesignation1;

    clientModel.contactDetailsList[1].name = this.formGroup.value.contactName2;
    clientModel.contactDetailsList[1].phoneNo = this.formGroup.value.contactPhoneNo2;
    clientModel.contactDetailsList[1].emailId = this.formGroup.value.contactEmailId2;
    clientModel.contactDetailsList[1].designation = this.formGroup.value.contactDesignation2;

    clientModel.policyBuckets = this.formGroup.value.policyBuckets.value;

    return clientModel;
  }

  get policyFormArray() {
    return this.formGroup.controls.policyBuckets as FormArray;
  }

  policyListChange(event) {
    if (event.value.indexOf(event.itemValue) !== -1) {
      this.addPolicyGroup(event.itemValue);
    } else {
      const groupToRemoveIndex = this.policyFormArray.value.findIndex((policy: ClientPolicyBucketModel) =>
        policy.policyId === event.itemValue);
      this.policyFormArray.removeAt(groupToRemoveIndex);
    }
    this.formGroup.updateValueAndValidity();
  }

  addPolicyGroup(policy: SelectItem) {
    const policyFormGroup = this.formBuilder.group({
      policyId: [policy.value],
      effectiveDate: [null],
      terminationDate: [null]
    });
    this.policyFormArray.push(policyFormGroup);
    this.formGroup.updateValueAndValidity();
  }

  getPolicyLabel(index: number) {
    const policyBucket = this.policyBuckets.filter((policy: PolicyBucketModel) => 
      policy.id === this.formGroup.controls.policyBucketsDropdown.value[index])[0];
    return AgencyConstants.policyTypeLabelMap.get(policyBucket.policyType) + ' - ' + policyBucket.name
  }

  addClient() {
    this.onValidate().subscribe((isValid: boolean) => {
      if (isValid) {
        this.clientService.saveClient(this.transformData()).subscribe(() => {
          this.toastr.success('Client added successfully', null, {timeOut: 100000});
        });
      }
    });
  }

  private getPolicyItemsFormatted(policyBuckets: Array<ClientPolicyBucketModel>): Array<SelectItem> {
    if (policyBuckets.length === 0) {
      return [];
    }
    return policyBuckets.map((policy: ClientPolicyBucketModel) => {
      const policyBucket: PolicyBucketModel = this.policyBuckets.filter((policyBucket: PolicyBucketModel) => 
        policyBucket.id === policy.policyId)[0];
      return {
        label: AgencyConstants.policyTypeLabelMap.get(policyBucket.policyType) + ' - ' + policyBucket.name,
        value: policyBucket.id 
      }
    });
  }

}
