import { Routes } from '@angular/router';

import {AdminUnidadNegocioCreateComponent} from "./admin-unidad-negocio-create/admin-unidad-negocio-create.component";
import {AdminUnidadNegocioDeleteComponent} from "./admin-unidad-negocio-delete/admin-unidad-negocio-delete.component";
import {AdminUnidadNegocioEditComponent} from "./admin-unidad-negocio-edit/admin-unidad-negocio-edit.component";
import {AdminUnidadNegocioListComponent} from "./admin-unidad-negocio-list/admin-unidad-negocio-list.component";

export const adminUnidadNegocioRoutes: Routes = [
    { path: 'unidadnegocio/list', component: AdminUnidadNegocioListComponent},
    { path: 'unidadnegocio/create', component: AdminUnidadNegocioCreateComponent},
    { path: 'unidadnegocio/delete/:id', component: AdminUnidadNegocioDeleteComponent},
    { path: 'unidadnegocio/edit/:id', component: AdminUnidadNegocioEditComponent }
];