import { TestBed } from '@angular/core/testing';

import { ManagerCheckService } from './manager-check.service';

describe('ManagerCheckService', () => {
  let service: ManagerCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
