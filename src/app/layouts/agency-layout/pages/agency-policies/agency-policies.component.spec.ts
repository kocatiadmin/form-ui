import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyPoliciesComponent } from './agency-policies.component';

describe('AgencyPoliciesComponent', () => {
  let component: AgencyPoliciesComponent;
  let fixture: ComponentFixture<AgencyPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
