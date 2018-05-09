import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { AuthguardService } from "./servicios/authguard/authguard.service";
import { AdminComponent } from "./admin/admin.component";
import { AdminUnidadNegocioComponent } from "./admin/admin-unidad-negocio/admin-unidad-negocio.component";
import {adminUnidadNegocioRoutes} from "./admin/admin-unidad-negocio/admin-unidad-negocio.routes";
import {AdminUnidadNegocioListComponent} from "./admin/admin-unidad-negocio/admin-unidad-negocio-list/admin-unidad-negocio-list.component";
import {AdminUnidadNegocioCreateComponent} from "./admin/admin-unidad-negocio/admin-unidad-negocio-create/admin-unidad-negocio-create.component";
import {AdminUnidadNegocioDeleteComponent} from "./admin/admin-unidad-negocio/admin-unidad-negocio-delete/admin-unidad-negocio-delete.component";
import {AdminUnidadNegocioEditComponent} from "./admin/admin-unidad-negocio/admin-unidad-negocio-edit/admin-unidad-negocio-edit.component";

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [ AuthguardService ] },
    { path: 'admin', component: AdminComponent, canActivate: [ AuthguardService ] },
    { path: 'unidadnegocio', component: AdminUnidadNegocioComponent, children: adminUnidadNegocioRoutes, canActivate: [ AuthguardService ] },
    /**admin unidad negocio**/
    { path: 'unidadnegocio_list', component: AdminUnidadNegocioListComponent},
    { path: 'unidadnegocio_create', component: AdminUnidadNegocioCreateComponent},
    { path: 'unidadnegocio_delete', component: AdminUnidadNegocioDeleteComponent},
    { path: 'unidadnegocio_edit/:id', component: AdminUnidadNegocioEditComponent }
    /*{ path: 'adminuser', component: AdminuserComponent, children: adminuserRoutes, canActivate: [ AuthguardService ] },
    { path: 'geometria', component: GeometriaComponent },
    { path: '**', redirectTo: 'home' }*/
    ];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
