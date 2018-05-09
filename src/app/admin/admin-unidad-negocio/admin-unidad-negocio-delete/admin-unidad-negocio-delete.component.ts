import { Component, OnInit, Input } from '@angular/core';
import {UnidadNegocio} from "../../../modelos/unidadnegocio.modelo";
import {UnidadNegocioService} from "../../../servicios/unidadnegocio.service";

@Component({
  selector: 'dti-admin-unidad-negocio-delete',
  templateUrl: './admin-unidad-negocio-delete.component.html',
  styles: []
})
export class AdminUnidadNegocioDeleteComponent implements OnInit {

  //delarr:Task[]=[];
  @Input() selectedUnidadesNegocio: UnidadNegocio[];
  constructor(private unidadNegocioServ: UnidadNegocioService) { }

  ngOnInit() {//console.log("ok");console.log(this.selectedUnidadesNegocio);
  }



    /*i:number=0;*/

    deleteUnidadNegocio(){

        console.log(this.selectedUnidadesNegocio);

        this.unidadNegocioServ.deleteUnidadesNegocio(this.selectedUnidadesNegocio)
            .subscribe(
                un => {
                    console.log(un);
                    //this.router.navigate(['/unidadnegocio_list']);//para redireccionar luego de agregar imagen
                },
                error=>console.log(<any>error)
            );


        /*this._taskdata.deleteAll(this.delarr).subscribe(

            (data:any)=>{
                for(this.i=0;this.i<this.delarr.length;this.i++)
                {
                    if(this.allTasks.find(x=>x==this.delarr[this.i]))
                    {
                        this.allTasks.splice(this.allTasks.indexOf(this.delarr[this.i]),1);
                    }
                }

            },
            function(err){console.log(err);},
            function(){
                this.delarr=[];
                console.log("Complete");
            }

        );*/
    }


}
