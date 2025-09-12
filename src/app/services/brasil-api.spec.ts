import { TestBed } from '@angular/core/testing';

import { BrasilApi } from './brasil-api';

describe('BrasilApi', () => {
  let service: BrasilApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrasilApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
