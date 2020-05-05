import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BiznisNavigationContainerComponent } from './components/biznisNavigation-container/biznisNavigation-container.component';
import { BiznisNavigationComponent } from './components/biznisNavigation/biznisNavigation.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BiznisNavigationApiEffects } from './state/effects/biznisNavigation-api.effects';
import { biznisNavigationReducer, biznisNavigationFeatureName } from './state/index';

@NgModule({
  declarations: [
    BiznisNavigationContainerComponent,
    BiznisNavigationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(biznisNavigationFeatureName, biznisNavigationReducer),
    EffectsModule.forFeature([BiznisNavigationApiEffects]),
  ],
  exports: [BiznisNavigationContainerComponent]
})
export class BiznisNavigationModule { }
