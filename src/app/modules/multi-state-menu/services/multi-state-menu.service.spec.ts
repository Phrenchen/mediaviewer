import { TestBed } from '@angular/core/testing';

import { MultiStateMenuService } from './multi-state-menu.service';

describe('MultiStateService', () => {
  let service: MultiStateMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiStateMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
