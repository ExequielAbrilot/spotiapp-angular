import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  artistas = [];
  loading:boolean;

  constructor(private spotiapp:SpotifyService, private router:Router) {
    this.loading=false;
   }

  ngOnInit() {
  }

  buscar(termino){
    this.loading =true && termino!==''; 
    this.spotiapp.getArtists(termino).subscribe((res:any)=>{
      this.artistas = res;
      console.log(res);
      this.loading=false;
    });
  }

  verArtista(id){
    this.router.navigate(['/artista',id]);
  }

}
