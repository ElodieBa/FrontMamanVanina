import { TestBed } from '@angular/core/testing';

import { OrdreServiceService } from './ordre-service.service';

describe('OrdreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdreServiceService = TestBed.get(OrdreServiceService);
    expect(service).toBeTruthy();
  });
});
