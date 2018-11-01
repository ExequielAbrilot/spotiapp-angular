import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-track',
  templateUrl: './top-track.component.html',
  styles: []
})

export class TopTrackComponent implements OnInit {

  @Input() idArtist;
  topTracks:any[] = [];
  constructor(private spotify:SpotifyService) {
    
   }

  ngOnInit() {
    this.getTopTrack();
    console.log(this.idArtist);
  }

  getTopTrack(){
    this.spotify.getTopTrack(this.idArtist)
      .subscribe(res=>{
        this.topTracks = res
        console.log(res);
      });
  }

}
