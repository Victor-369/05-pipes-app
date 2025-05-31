import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent],
  templateUrl: './uncommon-page.component.html'
})
// Es default porque se utilizará por defecto eventualmente. "Para poder importar facilmente de las rutas padre"
export default class UncommonPageComponent { }
