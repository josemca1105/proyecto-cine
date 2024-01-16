import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit {

  first_name: string = "";
  email: string = "";
  password: string = "";

  ClienteArray: any[] = [];

  currentClienteID = "";

  constructor(private http: HttpClient, private router: Router) {
    this.getAllCliente();
  }

  getAllCliente() {
    this.http.get("http://127.0.0.1:8000/api/users").subscribe((resultData: any)=> {
        // console.log(resultData);
        this.ClienteArray = resultData;
    });
  }

  ngOnInit() {
  }

  register() {

    let bodyData = {
      "first_name": this.first_name,
      "email": this.email,
      "password": this.password,
    };

    this.http.post("http://127.0.0.1:8000/api/register", bodyData).subscribe((resultData: any) => {
      console.log("Registro Exitoso");
      alert("Usuario registrado con exito");
      this.getAllCliente();
      this.first_name = '';
      this.email = '';
      this.password = '';
      this.router.navigateByUrl('index');
    })
  }

  saveCliente() {
    if(this.currentClienteID == '') {
      this.register();
    }
  }

}
