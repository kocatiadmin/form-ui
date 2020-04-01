import { PolicyType } from '../agency-clients/enums/policy-type.enum';

export class PolicyBucketModel {
  id?: number;
  name: string;
  policyType: PolicyType;
  carrier: string;
  network: string;
  endorsements: string;
  planDetails: string;
  funding: string;
  effectiveDate: Date;
  terminationDate: Date;
  premium: number;
  commissions: number;
  startLimit: number;
  endLimit: number;
  propertyCoverage: number;
  autoLiability: number;

  constructor(policyBucket?: PolicyBucketModel) {
    if (policyBucket) {
      this.id = policyBucket.id;
      this.name = policyBucket.name;
      this.policyType = policyBucket.policyType;
      this.carrier = policyBucket.carrier;
      this.network = policyBucket.network;
      this.endorsements = policyBucket.endorsements;
      this.planDetails = policyBucket.planDetails;
      this.funding = policyBucket.funding;
      this.effectiveDate = policyBucket.effectiveDate;
      this.terminationDate = policyBucket.terminationDate;
      this.premium = policyBucket.premium;
      this.commissions = policyBucket.commissions;
      this.startLimit = policyBucket.startLimit;
      this.endorsements = policyBucket.endorsements;
      this.propertyCoverage = policyBucket.propertyCoverage;
      this.autoLiability = policyBucket.autoLiability;
    } else {
      this.id = null;
      this.name = null;
      this.policyType = null;
      this.carrier = null;
      this.network = null;
      this.endorsements = null;
      this.planDetails = null;
      this.funding = null;
      this.effectiveDate = null;
      this.terminationDate = null;
      this.premium = null;
      this.commissions = null;
      this.startLimit = null;
      this.endorsements = null;
      this.propertyCoverage = null;
      this.autoLiability = null;
    }
  }
}