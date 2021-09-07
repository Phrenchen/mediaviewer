import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCommentComponent } from './top-comment.component';

describe('TopCommentComponent', () => {
  let component: TopCommentComponent;
  let fixture: ComponentFixture<TopCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
