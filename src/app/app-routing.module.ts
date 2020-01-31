import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgencyLoginComponent } from './login/agency-login/agency-login.component';
import { AgencyLayoutComponent } from './layouts/agency-layout/agency-layout.component';

const routes: Routes = [
  {
    path: "agency/login",
    component: AgencyLoginComponent
  },
  {
    path: 'agency',
    component: AgencyLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/agency-layout/agency-layout.module#AgencyLayoutModule'
      }]
  },
  {
    path: '',
    redirectTo: 'agency/login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
