import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyClientsComponent } from './agency-clients.component';

describe('AgencyClientsComponent', () => {
  let component: AgencyClientsComponent;
  let fixture: ComponentFixture<AgencyClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
