import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPriceComponent } from "./card-price/card-price.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPriceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  
  @Input()
  gameCover: string = "";
  //Repasse da Card-Label
  @Input()
  gameLabel: string = "";
  //Repasse da Card-Price
  @Input()
  gameTitle: string = "";
  @Input()
  gamePrice: string = "";
  @Input()
  gameConsole: string = "";


  constructor(){}
  
  ngOnInit(): void {
  }

}
