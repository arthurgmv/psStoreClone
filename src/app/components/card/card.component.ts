import {Component, Input, OnInit} from '@angular/core';
import {CardLabelComponent} from "./card-label/card-label.component";
import {CardPricingComponent} from "./card-pricing/card-pricing.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardLabelComponent,
    CardPricingComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input()
  gameCover:string = ""
  @Input()
  gameLabel:string="Exclusive"
  @Input()
  gameType:string ="Digital"
  @Input()
  gamePrice:string = "USD 50.00"

  constructor() { }

  ngOnInit(): void {
  }

}
