import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Onser2Component } from './onser2.component';

describe('Onser2Component', () => {
  let component: Onser2Component;
  let fixture: ComponentFixture<Onser2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Onser2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Onser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
