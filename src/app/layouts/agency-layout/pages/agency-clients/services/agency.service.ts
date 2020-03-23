import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AgencyModel } from '../../models/agency.model';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  // private _agencyDetails: Subject<AgencyModel> = new Subject();

  // getAgencyDetails() : Observable<AgencyModel> {
  //   return this._agencyDetails.asObservable(); 
  // }

  constructor(private httpClient: HttpClient) {
    // this.getAgencyData(1).subscribe((agencyDetails: AgencyModel) => {
    //   this._agencyDetails.next(agencyDetails);
    // });
  }

  getAgencyDetails(): Observable<AgencyModel> {
    const id = 1;
    return this.httpClient.get<AgencyModel>('api/v1/agency/' + id);
  }
}
