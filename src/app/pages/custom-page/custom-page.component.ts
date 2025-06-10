import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
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
}
