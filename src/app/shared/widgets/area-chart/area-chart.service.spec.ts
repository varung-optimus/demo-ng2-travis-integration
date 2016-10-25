/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AreaChartService } from './area-chart.service';

describe('Service: AreaChart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AreaChartService]
    });
  });

  it('should ...', inject([AreaChartService], (service: AreaChartService) => {
    expect(service).toBeTruthy();
  }));
});
