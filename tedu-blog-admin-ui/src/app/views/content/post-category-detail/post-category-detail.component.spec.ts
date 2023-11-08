import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCategoryDetailComponent } from './post-category-detail.component';

describe('PostCategoryDetailComponent', () => {
  let component: PostCategoryDetailComponent;
  let fixture: ComponentFixture<PostCategoryDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCategoryDetailComponent]
    });
    fixture = TestBed.createComponent(PostCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
