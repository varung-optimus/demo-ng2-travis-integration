/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HistogramService } from './histogram.service';

describe('Service: Histogram', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistogramService]
    });
  });

  it('should ...', inject([HistogramService], (service: HistogramService) => {
    expect(service).toBeTruthy();
  }));
});
