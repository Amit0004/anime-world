import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SassFrameComponent } from './sass-frame.component';

describe('SassFrameComponent', () => {
  let component: SassFrameComponent;
  let fixture: ComponentFixture<SassFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SassFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SassFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
