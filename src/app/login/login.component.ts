import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthServiceService } from "../servicios/auth-service/auth-service.service";
import { Usuario } from "../modelos/usuario.modelo";
import { UnidadNegocioService } from "../servicios/unidadnegocio.service";
import { Observable } from "rxjs/Observable";
import { UnidadNegocio } from "../modelos/unidadnegocio.modelo";

@Component({
  selector: 'dti-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

    user: Usuario = new Usuario();
    textError: string = '';
    estadoCarga: boolean = false;
    unidadesnegocio: Observable<UnidadNegocio[]>;
    selectedUnidadNegocio: any;

    constructor(private authServ: AuthServiceService, private unidadNegocioServ: UnidadNegocioService, private router: Router) { }

    ngOnInit() {
      this.authServ.logout();
      this.unidadesnegocio = this.unidadNegocioServ.getUnidadesNegocio();
      //console.log(this.unidadesnegocio);
    }

    login(){

        this.estadoCarga = true;
        this.authServ.login(this.user, this.selectedUnidadNegocio)
            .subscribe(
                resultado => {
                    if(resultado === true){
                        this.router.navigateByUrl('/home');
                    }
                    else {
                        this.textError = "Credenciales Incorrectas !";
                        this.estadoCarga = false;
                    }
                },
                err => {
                    this.textError = err.error.error.exception[0].message;
                    this.estadoCarga = false;
                }
            );
    }

}
