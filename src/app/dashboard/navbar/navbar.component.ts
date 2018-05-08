import { Component, OnInit} from '@angular/core';
import { AuthServiceService } from "../../servicios/auth-service/auth-service.service";
import { UnidadNegocio } from "../../modelos/unidadnegocio.modelo";
import { UnidadNegocioService } from "../../servicios/unidadnegocio.service";

@Component({
  selector: 'dti-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

    iduNegocio = sessionStorage.getItem('uNegocio');
    unidadNegocio: UnidadNegocio = new UnidadNegocio();

  constructor(private authServ: AuthServiceService, private unidadNegocioServ: UnidadNegocioService) { }

  ngOnInit() {
      if(this.iduNegocio){
          this.unidadNegocioServ.getUnidadNegocio(this.iduNegocio).subscribe(
              data =>{
                  this.unidadNegocio = data;
                  //console.log(sessionStorage.getItem('uNegocio'));
              },
              error=> console.log(<any>error)
          );
      }
  }


    logout(){
        this.authServ.logout();
    }

    isLoged(){
        if(sessionStorage.getItem('token')){
            return true;
        }
        return false;
    }

}
