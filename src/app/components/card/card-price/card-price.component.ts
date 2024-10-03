import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  standalone: true,
  imports: [],
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.css'
})
export class CardPriceComponent implements OnInit{
  
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
