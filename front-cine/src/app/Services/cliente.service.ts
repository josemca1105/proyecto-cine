import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ClienteResponse {
  "id": number,
  "first_name": string,
  "email": string,
  "password": string,
  "last_name": string,
  "cedula": string,
  "photo": string,
  "address": string,
  "state": string,
  "city": string,
  "phone": string,
  "created_at": string,
  "updated_at": string
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getCliente(id: string) {
    return this.http.get(`http://127.0.0.1:8000/api/user/${id}`);
  }

  setUpdate(inputdata: object, clienteID: number) {
    return this.http.put(`http://127.0.0.1:8000/api/update/${clienteID}`, inputdata);
  }

}
