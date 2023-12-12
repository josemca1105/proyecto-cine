import { Component } from '@angular/core';
import { NavbarComponent } from '../Partials/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  email: string = '';
  password: string = '';
  conf_password: string = '';

  UserArray: any[] = [];


  currentUserID = '';

  constructor(private http: HttpClient) {
    this.getAllUser();
  }

  getAllUser() {
    this.http.get("http://127.0.0.1:8000/api/clientes").subscribe((resultData: any)=> {
        // console.log(resultData);
        this.UserArray = resultData;
    });
  }

  login() {
    let bodyData = {

    };
  }

  saveCliente() {
    if(this.currentUserID == '') {
      this.login();
    }
  }

}
