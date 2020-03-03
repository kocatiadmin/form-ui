import { IRouteInfo } from '../../shared/interfaces/route-info.interface';

export const AGENCY_ROUTES: IRouteInfo[] = [
  { path: '/agency/dashboard',   title: 'Dashboard',    icon:'fa-cube'},
  { path: '/agency/clients',     title: 'Clients',      icon:'fa-address-book'},
  { path: '/agency/employees',    title: 'Employees',     icon:'fa-users'},
  { path: '/agency/client/add',  title: 'Add a Client', icon:'fa-plus'},
];