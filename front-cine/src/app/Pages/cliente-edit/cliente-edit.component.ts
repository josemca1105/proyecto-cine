import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from '../../Services/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente-edit',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './cliente-edit.component.html',
  styleUrl: './cliente-edit.component.css'
})
export class ClienteEditComponent {

  clienteID!: any;
  cliente!: any;

  ClienteArray: any[] = [];

  constructor(private route: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteID = this.route.snapshot.paramMap.get('id');

    this.clienteService.getCliente(this.clienteID).subscribe((data: any) => {
      this.cliente = data;
      console.log(this.cliente);
    });
  }

  onFileChange(event: any) {
    const files = event.target.files;
    const file = files[0];
    this.cliente.photo = file;
  }

  setUpdate() {
    var inputData = {
      first_name: this.cliente.first_name,
      last_name: this.cliente.last_name,
      cedula: this.cliente.cedula,
      email: this.cliente.email,
      phone: this.cliente.phone,
      state: this.cliente.state,
      city: this.cliente.city,
      address: this.cliente.address,
    }

    this.clienteService.setUpdate(inputData, this.clienteID).subscribe({
      next: (res: any) => {
        console.log(res)
        alert('Datos de Cliente Actualizados')
      },
      error: (err: any) => {
        console.log(err)
      }
    });
  }
}
