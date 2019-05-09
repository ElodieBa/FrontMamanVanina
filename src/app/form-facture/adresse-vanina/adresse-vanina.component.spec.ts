import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseVaninaComponent } from './adresse-vanina.component';

describe('AdresseVaninaComponent', () => {
  let component: AdresseVaninaComponent;
  let fixture: ComponentFixture<AdresseVaninaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseVaninaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseVaninaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
