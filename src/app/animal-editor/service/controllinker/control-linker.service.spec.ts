import { TestBed } from '@angular/core/testing';

import { ControlLinkerService } from './control-linker.service';

describe('ControlLinkerService', () => {
  let service: ControlLinkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlLinkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
