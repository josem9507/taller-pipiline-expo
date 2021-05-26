import { Injectable } from '@angular/core'    
@Injectable()    
export class ImageService {    
    allImages = [];    
    
    getImages() {    
        return this.allImages = Imagesdelatils.slice(0);    
    }    
    
    getImage(id: number) {    
        return Imagesdelatils.slice(0).find(Images => Images.id == id)    
    }    
}    
const Imagesdelatils = [    
    { "id": 1, "brand": "perro", "url": "assets/images/carro1.jpg" },    
    { "id": 2, "brand": "perro", "url": "assets/images/carro2.jpg" },
    { "id": 3, "brand": "gato", "url": "assets/images/moto1.jpg" },
    { "id": 4, "brand": "gato", "url": "assets/images/moto2.jpg" },
    { "id": 5, "brand": "perro", "url": "assets/images/carro3.gif" },
]