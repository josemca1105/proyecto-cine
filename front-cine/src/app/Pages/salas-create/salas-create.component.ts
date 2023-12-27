import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-salas-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './salas-create.component.html',
  styleUrl: './salas-create.component.css'
})
export class SalasCreateComponent {
  SalaArray: any[] = [];

  name: string = "";
  n_asientos: string = "";
  desde: string = '';
  hasta: string = '';
  tipo: string = "";

  currentSalaID = "";

  constructor(private http: HttpClient, private router: Router) {
    this.getAllSala();
  }

  ngOnInit(): void {

  }

  getAllSala() {
    this.http.get("http://127.0.0.1:8000/api/salas").subscribe((resultData: any)=> {
        // console.log(resultData);
        this.SalaArray = resultData;
    });
  }

  register() {

    let bodyData = {
      "name": this.name,
      "n_asientos": this.n_asientos,
      "desde": this.desde,
      "hasta": this.hasta,
      "tipo": this.tipo,
    };

    this.router.navigateByUrl('salas');
    this.http.post("http://127.0.0.1:8000/api/salas/save", bodyData).subscribe((resultData: any) => {
      // console.log("Registro Exitoso");
      alert("Sala registrada con exito");
      this.getAllSala();
      this.name = '';
      this.n_asientos = '';
      this.desde = '';
      this.hasta = '';
      this.tipo = '';
    })
  }

  saveSala() {
    if(this.currentSalaID == '') {
      this.register();
    }
  }
}
