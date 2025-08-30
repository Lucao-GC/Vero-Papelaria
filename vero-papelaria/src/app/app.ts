
import { Component, signal } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CategoriesBarComponent } from "./shared/categories-bar/categories-bar.component";
import { BenefitsSectionComponent } from "./shared/benefits-section/benefits-section.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, CategoriesBarComponent, BenefitsSectionComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('vero-papelaria');
}
