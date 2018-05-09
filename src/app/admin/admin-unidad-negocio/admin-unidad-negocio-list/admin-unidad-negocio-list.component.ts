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
  selectedUnidadesNegocio: UnidadNegocio[] = [];

  constructor(private unidadNegocioServ: UnidadNegocioService) { }

  ngOnInit() {
      this.unidadesnegocio = this.unidadNegocioServ.getUnidadesNegocio();
  }

    selectCheckbox(item:UnidadNegocio){
        if(this.selectedUnidadesNegocio.find(x=>x==item))
        {
            this.selectedUnidadesNegocio.splice(this.selectedUnidadesNegocio.indexOf(item),1)
        }
        else{
            this.selectedUnidadesNegocio.push(item);
        }
        //console.log(this.selectedUnidadesNegocio);
    }


    deleteUnidadNegocio() {
        //console.log(this.selectedUnidadesNegocio);

    }


    }
