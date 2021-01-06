import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurrentWeatherComponent } from "./current-weather/current-weather.component";
import { CurrentDetailsComponent } from "./current-details/current-details.component";
import { LoaderComponent } from './loader/loader.component';
import { NavbarComponent } from "./navbar/navbar.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    LoaderComponent,
    CurrentWeatherComponent,
    CurrentDetailsComponent,
    NavbarComponent,
  ],
  exports: [
    LoaderComponent,
    CurrentWeatherComponent,
    CurrentDetailsComponent,
    NavbarComponent,
  ]
})
export class ComponentsModule {
}
