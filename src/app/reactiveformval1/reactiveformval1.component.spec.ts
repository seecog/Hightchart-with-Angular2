import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveformval1Component } from './reactiveformval1.component';

describe('Reactiveformval1Component', () => {
  let component: Reactiveformval1Component;
  let fixture: ComponentFixture<Reactiveformval1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactiveformval1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactiveformval1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
