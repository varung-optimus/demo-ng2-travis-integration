/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpeedometerService } from './speedometer.service';

describe('Service: Speedometer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeedometerService]
    });
  });

  it('should ...', inject([SpeedometerService], (service: SpeedometerService) => {
    expect(service).toBeTruthy();
  }));
});
