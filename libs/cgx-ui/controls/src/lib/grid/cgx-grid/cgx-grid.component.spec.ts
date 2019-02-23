import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CgxGridComponent } from './cgx-grid.component';

describe('CgxGridComponent', () => {
  let component: CgxGridComponent;
  let fixture: ComponentFixture<CgxGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CgxGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CgxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
