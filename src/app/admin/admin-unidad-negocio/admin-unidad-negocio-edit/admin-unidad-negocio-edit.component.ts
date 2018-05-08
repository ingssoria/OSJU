import { Component, OnInit } from '@angular/core';
import {UnidadNegocioService} from "../../../servicios/unidadnegocio.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UnidadNegocio} from "../../../modelos/unidadnegocio.modelo";
import {Observable} from "rxjs/Observable";
import {TipoUnidadNegocio} from "../../../modelos/tipounidadnegocio.modelo";
import {TipoUnidadNegocioService} from "../../../servicios/tipounidadnegocio.service";

@Component({
  selector: 'dti-admin-unidad-negocio-edit',
  templateUrl: './admin-unidad-negocio-edit.component.html',
  styles: []
})
export class AdminUnidadNegocioEditComponent implements OnInit {

  id: any;
  params: any;
  selectedTipoUnidadNegocio: any;

  tiposunidadnegocio: Observable<TipoUnidadNegocio[]>;
  unidadnegocio = new UnidadNegocio();

  constructor( private activedRoute: ActivatedRoute, private unidadNegocioServ: UnidadNegocioService, private tipoUnidadNegocioServ: TipoUnidadNegocioService, private router: Router ) { }

  ngOnInit() {
      this.tiposunidadnegocio = this.tipoUnidadNegocioServ.getTiposUnidadesNegocio();

      this.params = this.activedRoute.params.subscribe(params => this.id = params['id']);
      this.unidadNegocioServ.getUnidadNegocio(this.id).subscribe(
          data => {

              this.unidadnegocio.idUnidadNegocio = this.id;
              this.unidadnegocio.id_tipo_unidadnegocio = data['id_tipo_unidad_negocio']['id_tipo_unidad_negocio'];
              this.selectedTipoUnidadNegocio = data['id_tipo_unidad_negocio']['id_tipo_unidad_negocio'];
              this.unidadnegocio.nombre = data['nombre'];

          },
          error => console.log(<any>error)
      );
  }

  ngOnDestroy(){
      this.params.unsubscribe();
  }

  updateUnidadNegocio(unidadnegocio){
      this.unidadNegocioServ.updUnidadNegocio(this.unidadnegocio)
          .subscribe(
              data =>{
                  console.log(unidadnegocio);
                  this.router.navigate(['/unidadnegocio_list'])
              },
              error => {console.log(<any>error);console.log(this.unidadnegocio);}
          );
  }


}
