import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeImplComponent } from './async-pipe-impl.component';

describe('AsyncPipeImplComponent', () => {
  let component: AsyncPipeImplComponent;
  let fixture: ComponentFixture<AsyncPipeImplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncPipeImplComponent]
    });
    fixture = TestBed.createComponent(AsyncPipeImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
