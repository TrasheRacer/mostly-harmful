import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateConfirmComponent } from './state-confirm.component';

describe('StateConfirmComponent', () => {
  let component: StateConfirmComponent;
  let fixture: ComponentFixture<StateConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
