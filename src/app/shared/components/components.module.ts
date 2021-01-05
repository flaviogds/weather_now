import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { LoaderComponent } from './loader/loader.component';
import { CitiesTypeaheadComponent } from './cities-typeahead/cities-typeahead.component';
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import { CurrentDetailsComponent } from "./current-details/current-details.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TypeaheadModule.forRoot(),
  ],
  declarations: [
    LoaderComponent,
    CurrentWeatherComponent,
    CurrentDetailsComponent,
    CitiesTypeaheadComponent,
  ],
  exports: [
    LoaderComponent,
    CurrentWeatherComponent,
    CurrentDetailsComponent,
    CitiesTypeaheadComponent,
  ]
})
export class ComponentsModule {
}
