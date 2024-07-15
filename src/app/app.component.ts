import { Component } from '@angular/core';
import { ThemeService } from 'src/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Theme Toggeler';

  constructor(
    public themeService: ThemeService
  ) { }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
