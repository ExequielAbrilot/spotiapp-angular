import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  nuevasCanciones = [];
  loading:boolean;
  error:boolean;
  mensaje:string;

  constructor(private spotify:SpotifyService, private router:Router) { 
    this.loading = true;
    this.error = false
    this.spotify.getNewReleases().subscribe((res:any)=>{
      this.nuevasCanciones = res;
      this.loading = false;
      console.log(this.nuevasCanciones);
    }, (err)=>{
      this.error=true;
      this.loading = false;
      this.mensaje = err.error.error.message;
      console.log(this.mensaje);
    });
  }

  ngOnInit() {
  }

  verArtista(id){
    this.router.navigate(['/artista',id]);
  }

}
