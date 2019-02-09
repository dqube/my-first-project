import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdReviewComponent } from './md-review.component';

describe('MdReviewComponent', () => {
  let component: MdReviewComponent;
  let fixture: ComponentFixture<MdReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
