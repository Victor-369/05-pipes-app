import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { LocaleService } from './services/locale.service';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // definir idioma de la aplicación utilizando "registerLocaleData" y "localeEs" o "localeFr"
    {
      provide: LOCALE_ID,
      deps: [LocaleService],  // La dependencia a utilizar
      useFactory: (localeService: LocaleService) => localeService.getLocale, // La función que se disparará cuando este proveedor se esté inicializando
    }
  ],
};
