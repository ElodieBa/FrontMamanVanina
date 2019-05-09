import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandModifComponent } from './command-modif.component';

describe('CommandModifComponent', () => {
  let component: CommandModifComponent;
  let fixture: ComponentFixture<CommandModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
