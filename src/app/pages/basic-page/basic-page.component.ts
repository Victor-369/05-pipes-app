import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html'
})
// Es default porque se utilizará por defecto eventualmente. "Para poder importar facilmente de las rutas padre"
export default class BasicPageComponent {
  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));


  nameLower = signal('fernando');
  nameUpper = signal('FERNANDO');
  fullName = signal('FeRnAnDo HeRreRa');

  customDate = signal(new Date());

  // cambios de la fecha/hora en tiempo real
  tickingDateEffect = effect((onCleanup) => {

    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    // Función para destruir el efecto "tickingDateEffect" pasándole la variable "interval"
    onCleanup(() => {
      clearInterval(interval);
    });
  });

  changeLocale(locale: AvailableLocale) {
    this.localeService.changeLocale(locale);
  }
}
