import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from '../../Services/cliente.service';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-edit',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, NgIf],
  templateUrl: './cliente-edit.component.html',
  styleUrl: './cliente-edit.component.css'
})
export class ClienteEditComponent implements OnInit {

  clienteID!: any;
  cliente!: any;

  ClienteArray: any[] = [];
  errors: any;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
    this.clienteID = this.route.snapshot.paramMap.get('id');
    // this.cliente = {
    //   first_name: '',
    //   last_name: '',
    //   cedula: '',
    //   email: '',
    //   phone: '',
    //   state: '',
    //   city: '',
    //   address: '',
    // };

    this.clienteService.getCliente(this.clienteID).subscribe((data: any) => {
      console.log(this.cliente)
      this.cliente = data;
    });
  }

  setUpdate() {
    var inputData = {
      first_name: this.cliente.first_name,
      email: this.cliente.email,
      password: this.cliente.password,
      last_name: this.cliente.last_name,
      cedula: this.cliente.cedula,
      phone: this.cliente.phone,
      state: this.cliente.state,
      city: this.cliente.city,
      address: this.cliente.address,
      photo: this.cliente.photo
    }

    this.clienteService.setUpdate(inputData, this.clienteID).subscribe({
      next: (res: any) => {
      this.router.navigateByUrl('clientes');
        alert('Datos de Cliente Actualizados')
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(this.errors)
      }
    });
  }
}
