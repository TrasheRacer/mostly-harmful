import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionHomeComponent } from './under-construction-home.component';

describe('UnderConstructionHomeComponent', () => {
  let component: UnderConstructionHomeComponent;
  let fixture: ComponentFixture<UnderConstructionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderConstructionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderConstructionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
