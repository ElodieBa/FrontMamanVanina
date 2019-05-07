import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeListElodieComponent } from './commande-list-elodie.component';

describe('CommandeListElodieComponent', () => {
  let component: CommandeListElodieComponent;
  let fixture: ComponentFixture<CommandeListElodieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeListElodieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeListElodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
