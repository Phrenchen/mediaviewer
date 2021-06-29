import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleAnythingComponent } from './toggle-anything.component';

describe('ToggleAnythingComponent', () => {
  let component: ToggleAnythingComponent;
  let fixture: ComponentFixture<ToggleAnythingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleAnythingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
