import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginDetailsModel } from '../models/login-details.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserRoles } from '../enums/user-roles.enum';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-agency-login',
  templateUrl: './agency-login.component.html',
  styleUrls: ['./agency-login.component.scss']
})
export class AgencyLoginComponent implements OnInit {
  @ViewChild('loginForm', {static: false})  loginForm: NgForm;
  isFormValid: Boolean = true;
  loginDetails: LoginDetailsModel;

  constructor(private router: Router, private toastr: ToastrService, private loginService: LoginService) { }

  ngOnInit() {
    this.loginDetails = new LoginDetailsModel();
    this.loginDetails.userRole = UserRoles.AGENCY;
  }

  login(event: any) {
    if (this.loginForm.invalid) {
      this.isFormValid = false;
      event.preventDefault();
    } else {
      if (this.loginService.isLoggedInUserValid(this.loginDetails)) {
        this.isFormValid = true;
        this.router.navigate(['agency/dashboard']);
      } else {
        this.toastr.error('Invalid username/password', 'Login Error');
      }
    }
  }

}
