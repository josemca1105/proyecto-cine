import { Component } from '@angular/core';
import { NavbarComponent } from '../Partials/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  // email: string = '';
  // password: string = '';
  // conf_password: string = '';

  // UserArray: any[] = [];


  // currentUserID = '';

  // constructor(private http: HttpClient) {
  //   this.getAllUser();
  // }

  // getAllUser() {
  //   this.http.get("http://127.0.0.1:8000/api/clientes").subscribe((resultData: any)=> {
  //       // console.log(resultData);
  //       this.UserArray = resultData;
  //   });
  // }

  // login() {
  //   let bodyData = {

  //   };
  // }

  // saveCliente() {
  //   if(this.currentUserID == '') {
  //     this.login();
  //   }
  // }
  email: string = '';
  password: string = '';

  // loginObj: any = {
  //   "emailID": "",
  //   "password": ""
  // }

  constructor (private http: HttpClient, private router: Router) {}

  login() {
    let inputData = {
      "email": this.email,
      "password": this.password,
    }

    debugger;
    this.http.post('http://127.0.0.1:8000/api/login', inputData).subscribe(
      (res: any) => {
        const user = res.user; // obtener datos de usuario
        const token = res.token // obtener datos del token
        localStorage.setItem('user', JSON.stringify(user)); // guardar datos del usuario
        localStorage.setItem('token', token); // guardar datos del token
        alert('Ingreso Exitoso')
        this.router.navigateByUrl('index');
      },
      (error) => {
        alert('Los credenciales son erroneos')
      }
    )
  }
}
