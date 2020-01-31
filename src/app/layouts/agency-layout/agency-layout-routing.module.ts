import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgencyLayoutComponent } from './agency-layout.component';
import { AgencyDashboardComponent } from './pages/agency-dashboard/agency-dashboard.component';
import { AgencyClientsComponent } from './pages/agency-clients/agency-clients.component';
import { AgencyPoliciesComponent } from './pages/agency-policies/agency-policies.component';
import { AddClientComponent } from './pages/add-client/add-client.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: AgencyDashboardComponent
  },
  {
    path: "clients",
    component: AgencyClientsComponent
  },
  {
    path: "policies",
    component: AgencyPoliciesComponent
  },
  {
    path: "client/add",
    component: AddClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyLayoutRoutingModule {}
