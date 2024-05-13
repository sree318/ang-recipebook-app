import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'example-app';
  loadedFeature = '';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
    console.log(feature);
  }
}
