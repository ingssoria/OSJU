import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../../servicios/auth-service/auth-service.service";

@Component({
  selector: 'dti-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private authServ: AuthServiceService) { }

  ngOnInit() {
  }

    logout(){
        this.authServ.logout();
    }

    isLoged(){
        if(sessionStorage.getItem('token')){
            return true;
        }
        return false;
    }

}
