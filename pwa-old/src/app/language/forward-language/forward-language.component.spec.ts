import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardLanguageComponent } from './forward-language.component';

describe('ForwardLanguageComponent', () => {
  let component: ForwardLanguageComponent;
  let fixture: ComponentFixture<ForwardLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwardLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwardLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
