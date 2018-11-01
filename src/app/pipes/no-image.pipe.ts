import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(imagenes: any[]): string {
    if(imagenes && !imagenes.length){
      return 'assets/img/noimage.png';
    }
    if(imagenes){
      return imagenes[0].url;
    }else{
      return 'assets/img/noimage.png';
    }

    
  }

}
