import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency-clients/services/agency.service';
import { AgencyModel } from '../models/agency.model';
import { AgencyConstants } from '../../constants/agency.constants';

@Component({
  selector: 'app-agency-dashboard',
  templateUrl: './agency-dashboard.component.html',
  styleUrls: ['./agency-dashboard.component.scss']
})
export class AgencyDashboardComponent implements OnInit {
  agencyModel: AgencyModel;

  AgencyConstants = AgencyConstants;

  constructor(private agencyService: AgencyService) { }

  ngOnInit() {
    this.agencyService.getAgencyDetails().subscribe((agencyModel: AgencyModel) => {
      this.agencyModel = agencyModel;
    });
  }

}
