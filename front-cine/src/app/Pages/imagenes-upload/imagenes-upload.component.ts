import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-imagenes-upload',
  standalone: true,
  imports: [NgFor],
  templateUrl: './imagenes-upload.component.html',
  styleUrl: './imagenes-upload.component.css'
})
export class ImagenesUploadComponent {

  uploadedFileName: string[] = [];
  fileURL: string = 'https://api.pexels.com/v1/photos'
  constructor(private http: HttpClient) { }

  uploadImage(event: any) {
    debugger;
    const file = event.currentTarget.files[0];
    if (file.type == 'image/png' && file.size < 800000) {
      const formObj = new FormData();
      formObj.append('file', file);
      this.http.post("http://storeapi.gerasim.in/api/Customer/Upload", formObj).subscribe((res: any) => {
        debugger;
        this.uploadedFileName.push(res);
      });
    } else {
      if (file.size > 800000) {
        alert("Los archivos deben pesar menos de 800kb");
      } else {
        alert("Solo se aceptan archivos .PNG");
      }
    }
  }
}
