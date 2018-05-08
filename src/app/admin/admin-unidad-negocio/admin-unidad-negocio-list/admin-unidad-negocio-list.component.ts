import { Component, OnInit } from '@angular/core';
import {UnidadNegocio} from "../../../modelos/unidadnegocio.modelo";
import {Observable} from "rxjs/Observable";
import {UnidadNegocioService} from "../../../servicios/unidadnegocio.service";

@Component({
  selector: 'dti-admin-unidad-negocio-list',
  templateUrl: './admin-unidad-negocio-list.component.html',
  styles: []
})
export class AdminUnidadNegocioListComponent implements OnInit {

  unidadesnegocio: Observable<UnidadNegocio[]>;

  constructor(private unidadNegocioServ: UnidadNegocioService) { }

  ngOnInit() {
      this.unidadesnegocio = this.unidadNegocioServ.getUnidadesNegocio();
  }

}
