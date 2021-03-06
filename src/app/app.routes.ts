import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { SearchComponent } from './componentes/search/search.component';

export const ROUTES:Routes = [
    { path:'home', component: HomeComponent },
    { path:'artista/:id', component: ArtistaComponent },
    { path:'search', component: SearchComponent },
    { path:'', pathMatch:"full", redirectTo:"home" },
    { path:'**', pathMatch:"full", redirectTo:"home" }

];