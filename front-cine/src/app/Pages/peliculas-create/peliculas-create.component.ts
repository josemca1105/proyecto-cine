import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage, getDownloadURL, listAll, ref, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-peliculas-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './peliculas-create.component.html',
  styleUrl: './peliculas-create.component.css'
})
export class PeliculasCreateComponent {
  PeliculasArray: any[] = [];

  nombre: string = '';
  descripcion: string = '';
  duracion: string = '';
  genero: string = '';
  fecha_estreno: string = '';

  currentPeliculaID = '';

  images: string[];

  constructor(private http: HttpClient, private router: Router, private storage: Storage) {
    this.images = [];
  }

  ngOnInit(): void {

  }

  getAllPelicula() {
    this.http.get("http://127.0.0.1:8000/api/peliculas").subscribe((resultData: any) => {
      this.PeliculasArray = resultData;
    });
  }

  register() {
    let bodyData = {
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "duracion": this.duracion,
      "genero": this.genero,
      "fecha_estreno": this.fecha_estreno
    };

    this.http.post("http://127.0.0.1:8000/api/peliculas/save", bodyData).subscribe((resultData: any) => {
      alert("Pelicula Registrada con exito");
      this.getAllPelicula();
      this.nombre = '';
      this.descripcion = '';
      this.duracion = '';
      this.genero = '';
      this.fecha_estreno = '';
      this.router.navigateByUrl('peliculas');
    });
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error));
  }

  savePelicula() {
    if (this.currentPeliculaID == '') {
      this.register();
      this.uploadImage(event);
    }
  }
}
