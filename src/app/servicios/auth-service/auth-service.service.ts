import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Usuario } from "../../modelos/usuario.modelo";
import 'rxjs/add/operator/map'


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
          return true;
      }
      return false;
  }

  private error(error: any){
      let msg = (error.message) ? error.message : 'Error desconocido';
      Observable.throw(msg);
  }

  login(user: Usuario): Observable<boolean>{
      let body = 'name=' + user.name + '&pass=' + user.pass;
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

      return this.http.post<boolean>(this.getUrl(/*'tokens'*/'login'), body, {headers : headers})
          .map((data) => this.getDatos(data));
  }

  logout(){
      //localStorage.clear();
      sessionStorage.removeItem('token');
  }

}
