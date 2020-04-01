import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgencyDashboardComponent } from './pages/agency-dashboard/agency-dashboard.component';
import { AgencyClientsComponent } from './pages/agency-clients/agency-clients.component';
import { AddClientComponent } from './pages/agency-clients/add-client/add-client.component';
import { ClientEmployeesComponent } from './pages/client-employees/client-employees.component';
import { ClientListComponent } from './pages/agency-clients/client-list/client-list.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: AgencyDashboardComponent
  },
  {
    path: "clients",
    component: AgencyClientsComponent,
    children: [
      {
        path: 'list',
        component: ClientListComponent
      },
      {
        path: 'add',
        component: AddClientComponent
      }
    ]
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
