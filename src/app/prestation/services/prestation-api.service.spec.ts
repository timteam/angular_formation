import { TestBed } from '@angular/core/testing';

import { PrestationApiService } from './prestation-api.service';

describe('PrestationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestationApiService = TestBed.get(PrestationApiService);
    expect(service).toBeTruthy();
  });
});
