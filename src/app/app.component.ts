import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutes } from './app.routes';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AppRoutes,HeaderComponent,RouterModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pcs-technology';
}
