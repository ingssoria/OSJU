import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Usuario } from "../../modelos/usuario.modelo";
import 'rxjs/add/operator/map'
import {UnidadNegocio} from "../../modelos/unidadnegocio.modelo";


@Injectable()
export class AuthServiceService {

  private apiURL = 'http://localhost/back_desytim/web/app_dev.php/api/';

  constructor(private http: HttpClient) { }

  private getUrl(modelo: string){
      return this.apiURL + modelo;
  }

  private getDatos(data){
      if(data && data['token']){
          sessionStorage.setItem('token', data['token']);
          sessionStorage.setItem('uNegocio', data['uNegocio']);
          //console.log(sessionStorage);
          return true;
      }
      return false;
  }

  private error(error: any){
      let msg = (error.message) ? error.message : 'Error desconocido';
      Observable.throw(msg);
  }

  login(user: Usuario, unidadNegocio: any): Observable<boolean>{
      let body = 'name=' + user.name + '&pass=' + user.pass + '&un=' + unidadNegocio;
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

      return this.http.post<boolean>(this.getUrl('tokens'), body, {headers : headers})
          .map((data) => this.getDatos(data));
  }

  logout(){
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('uNegocio');
  }

}
