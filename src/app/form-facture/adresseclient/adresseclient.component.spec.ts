import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseclientComponent } from './adresseclient.component';

describe('AdresseclientComponent', () => {
  let component: AdresseclientComponent;
  let fixture: ComponentFixture<AdresseclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
