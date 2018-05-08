import { Injectable } from '@angular/core';
import { TipoUnidadNegocio } from "../modelos/tipounidadnegocio.modelo";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TipoUnidadNegocioService {

    private apiURL = 'http://localhost/back_desytim/web/app_dev.php/api/';

    constructor(private http: HttpClient) { }


  private getUrl(modelo: string){
    return this.apiURL + modelo;
  }

  getTiposUnidadesNegocio():Observable<TipoUnidadNegocio[]>{
    return this.http.get<TipoUnidadNegocio[]>(this.getUrl("tipounidadnegocio"));
  }

  getTipoUnidadNegocio(id): Observable<TipoUnidadNegocio>{
      if(id)
        return this.http.get<TipoUnidadNegocio>(this.getUrl("tipounidadnegocio")+"/"+id);
  }

  addTipoUnidadNegocio(tipounidadnegocio): Observable<TipoUnidadNegocio>{
    return this.http.post<TipoUnidadNegocio>(this.getUrl("tipounidadnegocio"), tipounidadnegocio)/*
        ._catch((error:any)=>Observable.throw(error.json().error || {message: "Error del Servidor"}))*/;
  }

  updTipoUnidadNegocio(tipounidadnegocio): Observable<TipoUnidadNegocio>{
    return this.http.put<TipoUnidadNegocio>(this.getUrl("tipounidadnegocio")+"/"+tipounidadnegocio.id, tipounidadnegocio);
  }

  deleteTipoUnidadNegocio(id: string): Observable<TipoUnidadNegocio>{
    return this.http.delete<TipoUnidadNegocio>(this.getUrl("tipounidadnegocio")+"/"+id);
  }

  /*getOptions(): RequestOptions{
    let auth = new Headers({ 'Authorization' : 'Bearer ' + sessionStorage.getItem('token') });
    let options = new RequestOptions({ headers: auth });

    return options;*/
}
