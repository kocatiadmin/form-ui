import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgencyLayoutRoutingModule } from './agency-layout-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgencyDashboardComponent } from './pages/agency-dashboard/agency-dashboard.component';
import { RouterModule } from '@angular/router';
import { AgencyClientsComponent } from './pages/agency-clients/agency-clients.component';
import { ClientEmployeesComponent } from './pages/client-employees/client-employees.component';
import { ClientListComponent } from './pages/agency-clients/client-list/client-list.component';
import { AddClientComponent } from './pages/agency-clients/add-client/add-client.component';
import { AgencyConstants } from './constants/agency.constants';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    AgencyLayoutRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    MultiSelectModule,
    CalendarModule
  ],
  declarations: [
    AgencyDashboardComponent,
    AgencyClientsComponent,
    ClientEmployeesComponent,
    AddClientComponent,
    ClientListComponent
  ]
})

export class AgencyLayoutModule {
  constructor() {
    AgencyConstants.initialize();
  }
}