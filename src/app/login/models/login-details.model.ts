import { UserRoles } from '../enums/user-roles.enum';

export class LoginDetailsModel {
  username: string;
  password: string;
  userRole: UserRoles;

  constructor() {
    this.username = null;
    this.password = null;
    this.userRole = null;
  }
}