import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';

// Mis rutas
import { ROUTES } from './app.routes';
import { CardItemComponent } from './componentes/card-item/card-item.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { LoadingComponent } from './componentes/shared/loading/loading.component';
import { TopTrackComponent } from './componentes/top-track/top-track.component';
import { InformacionDeCabeceraComponent } from './componentes/informacion-de-cabecera/informacion-de-cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    CardItemComponent,
    NoImagePipe,
    LoadingComponent,
    TopTrackComponent,
    InformacionDeCabeceraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash:true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
