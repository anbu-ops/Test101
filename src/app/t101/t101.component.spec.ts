import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T101Component } from './t101.component';

describe('T101Component', () => {
  let component: T101Component;
  let fixture: ComponentFixture<T101Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [T101Component]
    });
    fixture = TestBed.createComponent(T101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
