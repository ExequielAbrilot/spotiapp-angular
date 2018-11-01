import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Lista Servicios');  
  }

  private getQuery(query){

    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBXcB8sAh83S7A18kzqyvhKHEn6E3VVQHwrjhdckHozRsET323upEtfC_V7u32fWf2ZGNjzQMsANQqDmRc'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    let ultimosRelease = 'browse/new-releases?limit=20'
    return this.getQuery(ultimosRelease).pipe( map( (data)=> data['albums'].items ) )
  }

  getArtists(artist){
    let urlArtista = `search?query=${artist}&type=artist&market=CL&offset=0&limit=20`;
    return this.getQuery(urlArtista).pipe( map( data=> data['artists'].items ) );
  }

  getArtist(id){
    let urlArtista = `artists/${id}`;
    return this.getQuery(urlArtista);
  }

  getTopTrack(id){
    let urlTopTrack = `artists/${id}/top-tracks?country=es`;
    return this.getQuery(urlTopTrack).pipe( ( map( data=>data['tracks'] ) ) );
  }
}
