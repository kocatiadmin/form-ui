import { Component, OnInit } from '@angular/core';
import { AGENCY_ROUTES } from '../../agency-layout/constants/agency.constants';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;

  constructor(private location: Location) { }

  ngOnInit() { }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    for (var item = 0; item < AGENCY_ROUTES.length; item++) {
      if (AGENCY_ROUTES[item].path === titlee) {
        return AGENCY_ROUTES[item].title;
      }
    }
    return 'Dashboard';
  }
}
