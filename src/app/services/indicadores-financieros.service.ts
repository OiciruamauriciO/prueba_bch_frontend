import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { IndicadoresFinancierosInterface } from '../core/interfaces/indicadores-financieros-interface';


@Injectable({
  providedIn: 'root'
})
export class IndicadoresFinancierosService {

  private pathIndicadoresFinancieros: string;
  private pathUriIndicadoresFinancieros: string;

  constructor(private http: HttpClient) { 
    this.pathUriIndicadoresFinancieros = "uf/fecha/";
    this.pathIndicadoresFinancieros = `${environment.baseEndpoint}/${this.pathUriIndicadoresFinancieros}`;
  }

  getIndicadoresFinancieros(fecha: string): Observable<IndicadoresFinancierosInterface> {
    return this.http.get(this.pathIndicadoresFinancieros+fecha).pipe((response) => response, (error: any) => error);
  }     
}
