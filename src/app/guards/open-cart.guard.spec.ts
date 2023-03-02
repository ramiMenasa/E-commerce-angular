import { TestBed } from '@angular/core/testing';

import { OpenCartGuard } from './open-cart.guard';

describe('OpenCartGuard', () => {
  let guard: OpenCartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OpenCartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
