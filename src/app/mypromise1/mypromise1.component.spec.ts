import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mypromise1Component } from './mypromise1.component';

describe('Mypromise1Component', () => {
  let component: Mypromise1Component;
  let fixture: ComponentFixture<Mypromise1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mypromise1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mypromise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
