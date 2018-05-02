import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Usuario} from "../modelos/usuario.modelo";

@Injectable()
export class UsuarioService {

    private apiURL = 'http://localhost/BACKEND/web/app_dev.php/api/';

    constructor(private http: HttpClient) { }

    private getUrl(modelo: string){
        return this.apiURL + modelo;
    }

    getUsuarios(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.getUrl("usuarios"), {headers : this.getOptions()});
    }

    private getOptions(): HttpHeaders{
        let auth = new HttpHeaders({'Authorization': 'Bearer '+ sessionStorage.getItem('token')});
        return auth;
    }

}
