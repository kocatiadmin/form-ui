export class ContactDetailsModel {
  name: string;
  phoneNo: string;
  emailId: string;
  designation: string;

  constructor(contactDetails?: ContactDetailsModel) {
    if (contactDetails) {
      this.name = contactDetails.name;
      this.phoneNo = contactDetails.phoneNo;
      this.emailId = contactDetails.emailId;
      this.designation = contactDetails.designation;
    } else {
      this.name = null;
      this.phoneNo = null;
      this.emailId = null;
      this.designation = null;
    }
  }
}