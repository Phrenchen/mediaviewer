import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStateMenuComponent } from './multi-state-menu.component';

describe('MultiStateMenuComponent', () => {
  let component: MultiStateMenuComponent;
  let fixture: ComponentFixture<MultiStateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiStateMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
