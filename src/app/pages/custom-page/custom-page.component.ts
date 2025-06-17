import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { heroColorPipe } from '../../pipes/hero-color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    heroColorPipe
  ],
  templateUrl: './custom-page.component.html'
})
// Es default porque se utilizará por defecto eventualmente. "Para poder importar facilmente de las rutas padre"
export default class CustomPageComponent {
  name = signal('Fernando');
  upperCase = signal(true);

  toggleButton() {
    this.upperCase.set(!this.upperCase());
  }

  heroes = signal(heroes);
}
