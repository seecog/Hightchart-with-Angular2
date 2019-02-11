import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Obse1Component } from './obse1.component';

describe('Obse1Component', () => {
  let component: Obse1Component;
  let fixture: ComponentFixture<Obse1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Obse1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Obse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
