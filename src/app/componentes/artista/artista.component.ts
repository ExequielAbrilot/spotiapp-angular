import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista:any = [];
  loading:boolean;

  constructor( private activeRoute: ActivatedRoute, private spotiapp: SpotifyService ) {
    this.loading = true;
    this.activeRoute.params.subscribe( res=>{
        this.getArtist(res.id);
    });
  }

  ngOnInit() {
  }

  getArtist(id){
    this.spotiapp.getArtist(id).subscribe(res=>{
      this.artista = res;
      console.log(this.artista);
      this.loading = false;
    });
  }

}
