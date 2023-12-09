import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-clientes-page',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './clientes-page.component.html',
  styleUrl: './clientes-page.component.css'
})
export class ClientesPageComponent {

  first_name: string = "";
  last_name: string = "";
  cedula: string = '';
  photo: string = "";
  email: string = "";
  address: string = "";
  state: string = "";
  city: string = "";
  phone: string = '';

  currentClienteID = "";
  ClienteArray: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllCliente();
  }

  getAllCliente() {
    this.http.get("http://127.0.0.1:8000/api/clientes").subscribe((resultData: any)=> {
        // console.log(resultData);
        this.ClienteArray = resultData;
    });
  }

  setDelete(data: any) {
    this.http.delete("http://127.0.0.1:8000/api/delete" + "/" + data.id).subscribe((resultData: any) => {
        // console.log(resultData);
        alert("Usuario Eliminado")
        this.getAllCliente();
    });
  }

}
