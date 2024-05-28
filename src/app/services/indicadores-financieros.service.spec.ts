import { TestBed } from '@angular/core/testing';
import { IndicadoresFinancierosService } from './indicadores-financieros.service';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { IndicadoresFinancierosInterface } from '../core/interfaces/indicadores-financieros-interface';

describe('IndicadoresFinancierosService', () => {

  let service: IndicadoresFinancierosService;
  let fecha: string = "24-05-2024";
  
  let observableResults: IndicadoresFinancierosInterface = {
    data: [{
      content: {},
      success: "",
    },]    
  };

  beforeEach( async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(IndicadoresFinancierosService);
  });

  it('Service IndicadoresFinancierosService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Function getIndicadoresFinancieros in IndicadoresFinancierosService should return value from observable', () => {
    service.getIndicadoresFinancieros(fecha).subscribe((res) => {
      expect(res).toEqual(observableResults);
    });
  });

});
