import { ContactDetailsModel } from './contact-details.model';
import { ClientPolicyBucketModel } from './client-policy-bucket.model';

export class ClientModel {
  name: string;
  taxId: string;
  email: string;
  phoneNo: string;
  website: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  agencyId: number;
  contactDetailsList: Array<ContactDetailsModel>;
  policyBuckets: Array<ClientPolicyBucketModel> 

  constructor(clientModel?: ClientModel) {
    if (clientModel) {
      this.name = clientModel.name;
      this.taxId = clientModel.taxId;
      this.email = clientModel.email;
      this.phoneNo = clientModel.phoneNo;
      this.website = clientModel.website;
      this.streetAddress = clientModel.streetAddress;
      this.city = clientModel.city;
      this.state = clientModel.state;
      this.zipCode = clientModel.zipCode;
      this.agencyId = clientModel.agencyId;
      this.contactDetailsList = clientModel.contactDetailsList.map((contact) => new ContactDetailsModel(contact));
      this.policyBuckets = clientModel.policyBuckets.map((policy) => new ClientPolicyBucketModel(policy));
    } else {
      this.name = null;
      this.taxId = null;
      this.email = null;
      this.phoneNo = null;
      this.website = null;
      this.streetAddress = null;
      this.city = null;
      this.state = null;
      this.zipCode = null;
      this.agencyId = 1;
      this.contactDetailsList = [new ContactDetailsModel(), new ContactDetailsModel()];
      this.policyBuckets = [];
    }
  }
}