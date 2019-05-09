import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureModifComponent } from './facture-modif.component';

describe('FactureModifComponent', () => {
  let component: FactureModifComponent;
  let fixture: ComponentFixture<FactureModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
