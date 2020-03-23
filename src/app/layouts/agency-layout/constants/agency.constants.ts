import { IRouteInfo } from '../../shared/interfaces/route-info.interface';
import { PolicyType } from '../pages/agency-clients/enums/policy-type.enum';

export const AGENCY_ROUTES: IRouteInfo[] = [
  { path: '/agency/dashboard',   title: 'Dashboard',    icon:'fa-cube'},
  { path: '/agency/clients/list',     title: 'Clients',      icon:'fa-address-book'},
  { path: '/agency/employees',    title: 'Employees',     icon:'fa-users'},
  { path: '/agency/client/add',  title: 'Add a Client', icon:'fa-plus'},
];

export class AgencyConstants {
  public static policyTypeLabelMap: Map<PolicyType, string> = new Map();

  static initialize() {
    AgencyConstants.policyTypeLabelMap.set(PolicyType.HEALTH, 'Health');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.DENTAL, 'Dental');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.VISION, 'Vision');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.LIFE_ADD, 'Life ADD');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.STD, 'STD');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.LTD, 'LTD');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.OTHER, 'Other');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.MEDICARE, 'Medicare');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.CGL_BOP, 'CGL');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.WORKER_COMPENSATION, 'Worker Compensation');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.UMBRELLA, 'Umbrella');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.OMMISSIONS, 'Ommissions');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.CRIME_BOND, 'Crime Bond');
    AgencyConstants.policyTypeLabelMap.set(PolicyType.COMMERCIAL_AUTO, 'Commercial Auto');
  }
}