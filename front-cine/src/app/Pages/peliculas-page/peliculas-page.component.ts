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

  constructor(private storage: Storage) {
    this.images = [];
  }

  ngOnInit() {
    this.getImages()
  }

  // uploadImage($event: any) {
  //   const file = $event.target.files[0];
  //   console.log(file);

  //   const imgRef = ref(this.storage, `images/${file.name}`);

  //   uploadBytes(imgRef, file)
  //     .then(response => {
  //       console.log(response)
  //       this.getImages();
  //     })
  //     .catch(error => console.log(error));
  // }

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
