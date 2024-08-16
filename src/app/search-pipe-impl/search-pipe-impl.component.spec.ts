import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPipeImplComponent } from './search-pipe-impl.component';

describe('SearchPipeImplComponent', () => {
  let component: SearchPipeImplComponent;
  let fixture: ComponentFixture<SearchPipeImplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPipeImplComponent]
    });
    fixture = TestBed.createComponent(SearchPipeImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
