import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionChildComponent } from './change-detection-child.component';

describe('ChangeDetectionChildComponent', () => {
  let component: ChangeDetectionChildComponent;
  let fixture: ComponentFixture<ChangeDetectionChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeDetectionChildComponent]
    });
    fixture = TestBed.createComponent(ChangeDetectionChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
