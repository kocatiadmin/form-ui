import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgencyLayoutRoutingModule } from './agency-layout-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgencyDashboardComponent } from './pages/agency-dashboard/agency-dashboard.component';
import { RouterModule } from '@angular/router';
import { AgencyClientsComponent } from './pages/agency-clients/agency-clients.component';
import { AgencyPoliciesComponent } from './pages/agency-policies/agency-policies.component';
import { AddClientComponent } from './pages/add-client/add-client.component';

@NgModule({
  imports: [
    CommonModule,
    AgencyLayoutRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule
  ],
  declarations: [
    AgencyDashboardComponent,
    AgencyClientsComponent,
    AgencyPoliciesComponent,
    AddClientComponent
  ]
})

export class AgencyLayoutModule {}