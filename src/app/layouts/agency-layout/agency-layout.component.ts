import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-Agency-lauout",
  templateUrl: "./Agency-layout.component.html",
  styleUrls: ["./Agency-layout.component.scss"]
})
export class AgencyLayoutComponent implements OnInit {

  ngOnInit() {}
  // public policies;
  // constructor(private policyService: PolicyService) {}

  // ngOnInit() {
  //   this.getPolicies();
  // }

  // getPolicies() {
  //   this.policyService.getPolicies().subscribe(
  //     data => {
  //       this.policies = data;
  //     },
  //     err => console.error(err),
  //     () => console.log("policies loaded")
  //   );
  // }
}
