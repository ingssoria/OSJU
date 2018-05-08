import { Injectable } from '@angular/core';
import { UnidadNegocio } from "../modelos/unidadnegocio.modelo";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UnidadNegocioService {

    private apiURL = 'http://localhost/back_desytim/web/app_dev.php/api/';

    constructor(private http: HttpClient) { }


  private getUrl(modelo: string){
    return this.apiURL + modelo;
  }

  getUnidadesNegocio():Observable<UnidadNegocio[]>{
    return this.http.get<UnidadNegocio[]>(this.getUrl("unidadnegocio"));
  }

  getUnidadNegocio(id): Observable<UnidadNegocio>{
      if(id)
        return this.http.get<UnidadNegocio>(this.getUrl("unidadnegocio")+"/"+id);
  }

  addUnidadNegocio(unidadnegocio): Observable<UnidadNegocio>{
    return this.http.post<UnidadNegocio>(this.getUrl("unidadnegocio"), unidadnegocio)/*
        ._catch((error:any)=>Observable.throw(error.json().error || {message: "Error del Servidor"}))*/;
  }

  updUnidadNegocio(unidadnegocio): Observable<UnidadNegocio>{
      //console.log(unidadnegocio);
    return this.http.put<UnidadNegocio>(this.getUrl("unidadnegocio")+"/"+unidadnegocio.idUnidadNegocio, unidadnegocio);
  }

  deleteUnidadNegocio(id: string): Observable<UnidadNegocio>{
    return this.http.delete<UnidadNegocio>(this.getUrl("unidadnegocio")+"/"+id);
  }

  /*getOptions(): RequestOptions{
    let auth = new Headers({ 'Authorization' : 'Bearer ' + sessionStorage.getItem('token') });
    let options = new RequestOptions({ headers: auth });

    return options;*/
}
