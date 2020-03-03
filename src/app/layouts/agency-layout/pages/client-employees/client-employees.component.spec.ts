import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEmployeesComponent } from './client-employees.component';

describe('AgencyPoliciesComponent', () => {
  let component: ClientEmployeesComponent;
  let fixture: ComponentFixture<ClientEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
