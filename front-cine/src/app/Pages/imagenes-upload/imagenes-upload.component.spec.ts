import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesUploadComponent } from './imagenes-upload.component';

describe('ImagenesUploadComponent', () => {
  let component: ImagenesUploadComponent;
  let fixture: ComponentFixture<ImagenesUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenesUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenesUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
