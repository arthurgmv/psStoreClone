import { Component } from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {CardPricingComponent} from "../../components/card/card-pricing/card-pricing.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    CardPricingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
