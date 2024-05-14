import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  portfolio:string = "https://portfolio-tau-three-73.vercel.app/"
  linkedin:string = "https://www.linkedin.com/in/arthur-gabriel-de-menezes-viana-1223a6239/"
  github:string = "https://github.com/arthurgmv"
}
