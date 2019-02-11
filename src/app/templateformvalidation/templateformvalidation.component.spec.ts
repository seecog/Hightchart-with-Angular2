import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformvalidationComponent } from './templateformvalidation.component';

describe('TemplateformvalidationComponent', () => {
  let component: TemplateformvalidationComponent;
  let fixture: ComponentFixture<TemplateformvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateformvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
