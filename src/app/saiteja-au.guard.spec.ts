import { TestBed } from '@angular/core/testing';

import { SaitejaAuGuard } from './saiteja-au.guard';

describe('SaitejaAuGuard', () => {
  let guard: SaitejaAuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SaitejaAuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
