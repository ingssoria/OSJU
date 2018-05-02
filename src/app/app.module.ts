import { routes } from "./app.routes";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthServiceService } from "./servicios/auth-service/auth-service.service";

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routes,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
      AuthServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
