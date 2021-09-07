import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridConfiguratorComponent } from './grid-configurator.component';

describe('GridConfiguratorComponent', () => {
  let component: GridConfiguratorComponent;
  let fixture: ComponentFixture<GridConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridConfiguratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
