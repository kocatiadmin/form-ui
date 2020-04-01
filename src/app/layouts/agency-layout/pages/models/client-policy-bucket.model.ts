export class ClientPolicyBucketModel {
  policyId: number;
  effectiveDate: Date;
  terminationDate: Date;

  constructor(clientPolicyBucket: ClientPolicyBucketModel) {
    if (clientPolicyBucket) {
      this.policyId = clientPolicyBucket.policyId;
      this.effectiveDate = clientPolicyBucket.effectiveDate;
      this.terminationDate = clientPolicyBucket.terminationDate;
    } else {
      this.policyId = null;
      this.effectiveDate = null;
      this.terminationDate = null;
    }
  }
}