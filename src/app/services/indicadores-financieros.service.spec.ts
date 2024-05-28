import { TestBed } from '@angular/core/testing';

import { IndicadoresFinancierosService } from './indicadores-financieros.service';

describe('IndicadoresFinancierosService', () => {
  let service: IndicadoresFinancierosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicadoresFinancierosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
