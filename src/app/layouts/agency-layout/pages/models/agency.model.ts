import { ClientModel } from './client.model';
import { PolicyBucketModel } from './policy-bucket.model';

export class AgencyModel {
  id?: number;
  agencyName: string;
  clientList: Array<ClientModel>;
  policyBuckets: Array<PolicyBucketModel>;
}