// gallery.component.ts
import { Component } from '@angular/core';
import { IMAGES } from '../../assets/images'; // Import the images array from external file
import { Location } from '@angular/common'; // Import Location for handling back button

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: string[] = IMAGES; // Use the imported images array
  selectedImage: string | null = null;

  constructor(private location: Location) { } // Inject Location in the constructor

  showImage(image: string) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

  addImage(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.images.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  // Trigger file input click event
  triggerInputFile() {
    document.getElementById('inputFile')?.click();
  }

  // Go back when back button is clicked
  goBack() {
    this.location.back();
  }
}
