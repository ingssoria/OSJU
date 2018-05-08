import { routes } from "./app.routes";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthServiceService } from "./servicios/auth-service/auth-service.service";
import { AuthguardService } from "./servicios/authguard/authguard.service";
import { UnidadNegocioService } from "./servicios/unidadnegocio.service";
import {TipoUnidadNegocioService} from "./servicios/tipounidadnegocio.service";

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { AuthInterceptorService } from "./servicios/auth-interceptor/auth-interceptor.service";
import { AdminComponent } from './admin/admin.component';
import { AdminUnidadNegocioComponent } from './admin/admin-unidad-negocio/admin-unidad-negocio.component';
import { AdminUnidadNegocioCreateComponent } from './admin/admin-unidad-negocio/admin-unidad-negocio-create/admin-unidad-negocio-create.component';
import { AdminUnidadNegocioDeleteComponent } from './admin/admin-unidad-negocio/admin-unidad-negocio-delete/admin-unidad-negocio-delete.component';
import { AdminUnidadNegocioEditComponent } from './admin/admin-unidad-negocio/admin-unidad-negocio-edit/admin-unidad-negocio-edit.component';
import { AdminUnidadNegocioListComponent } from './admin/admin-unidad-negocio/admin-unidad-negocio-list/admin-unidad-negocio-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    AdminComponent,
    AdminUnidadNegocioComponent,
    AdminUnidadNegocioCreateComponent,
    AdminUnidadNegocioDeleteComponent,
    AdminUnidadNegocioEditComponent,
    AdminUnidadNegocioListComponent
  ],
  imports: [
    BrowserModule,
    routes,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      AuthServiceService,
      AuthguardService,
      UnidadNegocioService,
      TipoUnidadNegocioService,
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
