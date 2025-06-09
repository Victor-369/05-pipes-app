import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canada'
};

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 32,
  address: 'Toronto, Canada'
};


@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html'
})
// Es default porque se utilizará por defecto eventualmente. "Para poder importar facilmente de las rutas padre"
export default class UncommonPageComponent {

  /************ i18n Select ************/
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  // toggle
  changeClient() {
    if(this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }


  /************ i18n Plural ************/
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando'
  });

  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
    'Andrea',
    'Juan',
    'Carlos',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  };


  /************ KeyValue Pipe ************/
  profile = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }


  /************ Async Pipe ************/
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('Tenemos data en la promesa');
      reject('Tenemos un error en la data');
      console.log('Promesa finalizada');
    }, 3500);
  });


  // Con observables. La subscripción es auotmática, al igual que la desuscripción
  myObservableTimer = interval(2000)
    .pipe(
      map((value) => value + 1),
      // Para disparar efectos secundarios
      tap((value) => console.log('tap:', value)));
}
