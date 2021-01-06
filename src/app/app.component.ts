import { Component } from '@angular/core';
import 'moment/locale/pt-br';

import * as moment from 'moment-timezone';

@Component({
  selector: 'weather-now-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    moment.locale('pt-br');
  }
}
