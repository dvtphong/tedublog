import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSeriesComponent } from './post-series.component';

describe('PostSeriesComponent', () => {
  let component: PostSeriesComponent;
  let fixture: ComponentFixture<PostSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSeriesComponent]
    });
    fixture = TestBed.createComponent(PostSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
