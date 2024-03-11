import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MaterialSharedModule } from './shared/material-shared/material-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigationBarComponent } from './pages/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialSharedModule, HttpClientModule, NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private router: Router
  ) {}
}
