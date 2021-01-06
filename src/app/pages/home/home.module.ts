import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomePage } from './containers/home/home.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { UnitSelectorComponent } from './components/unit-selector/unit-selector.component';

import { homeReducer } from './state/home.reducer';
import { HomeEffects } from './state/home.effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
  ],
  declarations: [
    HomePage,
    UnitSelectorComponent,
  ],
})
export class HomeModule { }
