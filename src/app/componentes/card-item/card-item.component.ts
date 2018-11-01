import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html'
})
export class CardItemComponent implements OnInit {

  @Input() elementoQueSeMuestra;
  @Input() desde;

  @Output() idCard: EventEmitter<number>;

  constructor() {
    this.idCard = new EventEmitter();
  }

  ngOnInit() {
  }

  obtenerCardId( artista = undefined ){    
    if(this.desde!=='home'){
      this.idCard.emit(this.elementoQueSeMuestra.id);
    }else if(artista){
      this.idCard.emit(artista.id);
    }
  }

}
