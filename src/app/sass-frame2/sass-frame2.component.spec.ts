import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassFrame2Component } from './sass-frame2.component';

describe('SassFrame2Component', () => {
  let component: SassFrame2Component;
  let fixture: ComponentFixture<SassFrame2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassFrame2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassFrame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
