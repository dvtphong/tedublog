import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReturnReasonComponent } from './post-return-reason.component';

describe('PostReturnReasonComponent', () => {
  let component: PostReturnReasonComponent;
  let fixture: ComponentFixture<PostReturnReasonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostReturnReasonComponent]
    });
    fixture = TestBed.createComponent(PostReturnReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
