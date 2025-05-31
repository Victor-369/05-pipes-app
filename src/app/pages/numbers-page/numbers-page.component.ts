import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
  ],
  templateUrl: './numbers-page.component.html'
})
// Es default porque se utilizará por defecto eventualmente. "Para poder importar facilmente de las rutas padre"
export default class NumbersPageComponent {
  // Se puede separar los miles con el símbolo "_"
  totalSales = signal(7_234_567.5567);
  percent = signal(0.4856);
}
