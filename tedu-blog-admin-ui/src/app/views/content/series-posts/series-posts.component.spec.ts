import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesPostsComponent } from './series-posts.component';

describe('SeriesPostsComponent', () => {
  let component: SeriesPostsComponent;
  let fixture: ComponentFixture<SeriesPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesPostsComponent]
    });
    fixture = TestBed.createComponent(SeriesPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
