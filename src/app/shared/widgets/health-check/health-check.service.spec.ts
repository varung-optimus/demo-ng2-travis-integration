/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HealthCheckService } from './health-check.service';

describe('Service: HealthCheck', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthCheckService]
    });
  });

  it('should ...', inject([HealthCheckService], (service: HealthCheckService) => {
    expect(service).toBeTruthy();
  }));
});
