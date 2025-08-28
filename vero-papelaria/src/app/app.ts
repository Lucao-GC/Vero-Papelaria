
import { Component, signal } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CategoriesBarComponent } from "./shared/categories-bar/categories-bar.component";
import { BenefitsSectionComponent } from "./shared/benefits-section/benefits-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, CategoriesBarComponent, BenefitsSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('vero-papelaria');
}
