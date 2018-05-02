import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./login/login.component";

/*import { AuthguardService } from "./servicios/authguard/authguard.service";*/

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent/*, canActivate: [ AuthguardService ]*/ },
    /*{ path: 'admin', component: DashboardComponent, canActivate: [ AuthguardService ] },
    { path: 'adminimage', component: AdminimageComponent, children: adminimageRoutes, canActivate: [ AuthguardService ] },
    { path: 'adminuser', component: AdminuserComponent, children: adminuserRoutes, canActivate: [ AuthguardService ] },
    { path: 'geometria', component: GeometriaComponent },*/
    { path: '**', redirectTo: 'home' }
    ];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
