import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './clientes-create.component.html',
  styleUrl: './clientes-create.component.css'
})
export class ClientesCreateComponent implements OnInit {

  ClienteArray: any[] = [];

  first_name: string = "";
  last_name: string = "";
  cedula: string = '';
  photo: string = "";
  email: string = "";
  address: string = "";
  state: string = "";
  city: string = "";
  phone: string = '';
  password: string = '';

  currentClienteID = "";

  constructor(private http: HttpClient, private router: Router) {
    this.getAllCliente();
  }

  ngOnInit() {
  }

  getAllCliente() {
    this.http.get("http://127.0.0.1:8000/api/users").subscribe((resultData: any)=> {
        // console.log(resultData);
        this.ClienteArray = resultData;
    });
  }

  register() {

    let bodyData = {
      "first_name": this.first_name,
      "last_name": this.last_name,
      "cedula": this.cedula,
      "photo": this.photo,
      "email": this.email,
      "address": this.address,
      "state": this.state,
      "city": this.city,
      "phone": this.phone,
      "password": this.password
    };

    this.http.post("http://127.0.0.1:8000/api/register", bodyData).subscribe((resultData: any) => {
      // console.log("Registro Exitoso");
      alert("Usuario registrado con exito");
      this.getAllCliente();
      this.first_name = '';
      this.last_name = '';
      this.cedula = '';
      this.photo = '';
      this.email = '';
      this.address = '';
      this.state = '';
      this.city = '';
      this.phone = '';
      this.password = '';
      this.router.navigateByUrl('clientes');
    })
  }

  saveCliente() {
    if(this.currentClienteID == '') {
      this.register();
    }
  }

}
