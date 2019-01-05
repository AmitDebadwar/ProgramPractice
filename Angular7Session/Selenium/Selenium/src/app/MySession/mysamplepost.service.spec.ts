import { TestBed } from '@angular/core/testing';

import { MysamplepostService } from './mysamplepost.service';

describe('MysamplepostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MysamplepostService = TestBed.get(MysamplepostService);
    expect(service).toBeTruthy();
  });
});
