import { Component, OnInit } from '@angular/core';
import { IndicadoresFinancierosService } from '../../services/indicadores-financieros.service';
import { IndicadoresFinancierosInterface } from '../../core/interfaces/indicadores-financieros-interface';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-indicadoresfinancieros',
  standalone: true,
  imports: [
    NgFor, 
    FormsModule,
  ],
  templateUrl: './indicadoresfinancieros.component.html',
  styleUrl: './indicadoresfinancieros.component.css',
  providers: [
    IndicadoresFinancierosService
  ],
})
export class IndicadoresfinancierosComponent implements OnInit {

  private fecha: string = "";
  public responseConverted: any;
  public objectConverted: any;
  public objectSeriesConverted: any;
  public arregloresponseConverted: any = [];
  public finalArregloresponseConverted: any = [];
  public temporalSubElemento: any;
  public seriesArray: any = [];
  public headersArray: any = ["Versión","Autor","Código","Nombre","Unidad Medida","Fecha","Valor"];

  public allIndicadoresFinancieros: IndicadoresFinancierosInterface = {
    data: [{
      content: {},
      success: "",
    },]    
  };

  constructor(private indicadoresFinancierosService: IndicadoresFinancierosService) { 
    this.fecha = "24-05-2024";
  }

  ngOnInit(): void {
    this.callToGetIndicadoresFinancieros(this.fecha);
  }

  async callToGetIndicadoresFinancieros(fecha: string) {
    (this.indicadoresFinancierosService.getIndicadoresFinancieros(fecha)).subscribe(async (response) => {
      if(response!=undefined){
        this.allIndicadoresFinancieros = response; 
        this.responseConverted = JSON.stringify(this.allIndicadoresFinancieros);  
        const object = JSON.parse(this.responseConverted);
        for (var i in object) {
          if(i==="content"){
            this.arregloresponseConverted.push(object[i]);
          }        
        }

        this.objectConverted = JSON.stringify(this.arregloresponseConverted[0]);
        const objectInner = JSON.parse(this.objectConverted);

        for (var j in objectInner) {
          if(j==="version" || j==="autor" || j==="codigo" || j==="nombre" || j==="unidad_medida"){
            this.finalArregloresponseConverted.push(objectInner[j]);
          } else {
            this.objectSeriesConverted = JSON.stringify(objectInner[j][0]);
            const objectInnerSerie = JSON.parse(this.objectSeriesConverted);
            for(var k in objectInnerSerie){
              if(k==="fecha" || k==="valor"){
                this.finalArregloresponseConverted.push(objectInnerSerie[k]);
              }
            }
          }      
        }

      }
    }, (e: any) => {
        console.log(e);   
    });     
  }
}
