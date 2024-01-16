import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-clientes-page',
  standalone: true,
  imports: [NgIf, NgFor, NgxPaginationModule, CommonModule],
  templateUrl: './clientes-page.component.html',
  styleUrl: './clientes-page.component.css'
})
export class ClientesPageComponent {

  p: number = 1;

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
    this.http.get("http://127.0.0.1:8000/api/users").subscribe((resultData: any)=> {
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
