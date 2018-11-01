import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-de-cabecera',
  templateUrl: './informacion-de-cabecera.component.html',
  styles: []
})
export class InformacionDeCabeceraComponent implements OnInit {
  @Input() artista;
  constructor() { }

  ngOnInit() {
  }

}
