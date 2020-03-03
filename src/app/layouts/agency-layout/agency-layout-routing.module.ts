import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgencyDashboardComponent } from './pages/agency-dashboard/agency-dashboard.component';
import { AgencyClientsComponent } from './pages/agency-clients/agency-clients.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { ClientEmployeesComponent } from './pages/client-employees/client-employees.component';

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
    path: "employees",
    component: ClientEmployeesComponent
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
