import { Component, OnInit } from '@angular/core';
import { IRouteInfo } from '../interfaces/route-info.interface';
import { AGENCY_ROUTES } from '../../agency-layout/constants/agency.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: IRouteInfo[];

  constructor() { }

  ngOnInit() {
    this.menuItems = AGENCY_ROUTES;
  }

}





