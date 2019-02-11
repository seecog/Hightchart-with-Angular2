import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypromiseComponent } from './mypromise.component';

describe('MypromiseComponent', () => {
  let component: MypromiseComponent;
  let fixture: ComponentFixture<MypromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
