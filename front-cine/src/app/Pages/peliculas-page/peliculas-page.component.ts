import { HttpClient } from '@angular/common/http';
import { NgFor, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Storage, getDownloadURL, listAll, ref, uploadBytes } from '@angular/fire/storage';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-peliculas-page',
  standalone: true,
  imports: [NgFor, NgxPaginationModule, CommonModule],
  templateUrl: './peliculas-page.component.html',
  styleUrl: './peliculas-page.component.css'
})
export class PeliculasPageComponent {
products: any;
getSeverity(arg0: any) {
throw new Error('Method not implemented.');
}

  images: string[];
  p: number = 1

  nombre: string = '';
  descripcion: string = '';
  duracion: string = '';
  genero: string = '';
  fecha_estreno: string = '';

  currentPeliculaID = '';
  PeliculasArray: any[] = [];

  constructor(private http: HttpClient, private storage: Storage) {
    this.images = [];
    this.getAllPelicula();
  }

  ngOnInit() {
    this.getImages()
  }

  getAllPelicula() {
    this.http.get("http://127.0.0.1:8000/api/peliculas").subscribe((resultData: any) => {
      this.PeliculasArray = resultData;
    });
  }

  setDelete(data: any) {
    this.http.delete("http://127.0.0.1:8000/api/peliculas/delete" + "/" + data.id).subscribe((resultData: any) => {
        // console.log(resultData);
        alert("Pelicula Eliminada")
        this.getAllPelicula();
    });
  }

  getImages() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
      .then(async response => {
        console.log(response)
        this.images = [];
        for(let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
      .catch(error => console.log(error))
  }
}
