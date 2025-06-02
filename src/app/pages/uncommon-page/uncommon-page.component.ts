import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe],
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
}
