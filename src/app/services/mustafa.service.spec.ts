import { TestBed } from '@angular/core/testing';

import { MustafaService } from './mustafa.service';

describe('MustafaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MustafaService = TestBed.get(MustafaService);
    expect(service).toBeTruthy();
  });
});
