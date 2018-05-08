import { Component, OnInit } from '@angular/core';
import {UnidadNegocioService} from "../../../servicios/unidadnegocio.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {TipoUnidadNegocio} from "../../../modelos/tipounidadnegocio.modelo";
import {TipoUnidadNegocioService} from "../../../servicios/tipounidadnegocio.service";

@Component({
  selector: 'dti-admin-unidad-negocio-create',
  templateUrl: './admin-unidad-negocio-create.component.html',
  styles: []
})
export class AdminUnidadNegocioCreateComponent implements OnInit {

  tiposunidadnegocio: Observable<TipoUnidadNegocio[]>;
  selectedTipoUnidadNegocio: any = 0;

  constructor(private unidadNegocioServ: UnidadNegocioService, private tipoUnidadNegocioServ: TipoUnidadNegocioService, private router: Router) { }

  ngOnInit() {
      this.tiposunidadnegocio = this.tipoUnidadNegocioServ.getTiposUnidadesNegocio();
  }

    createUnidadNegocio(unidadnegocio){
        //console.log(image);
        this.unidadNegocioServ.addUnidadNegocio(unidadnegocio)
            .subscribe(
                unidadnegocio => {
                    console.log(unidadnegocio);
                    this.router.navigate(['/unidadnegocio_list']);//para redireccionar luego de agregar imagen
                },
                error=>console.log(<any>error)
            );
    }

}
