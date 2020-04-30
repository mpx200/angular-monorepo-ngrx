import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainNewsContainerComponent } from './components/mainNews-container/mainNews-container.component';
import { MainNewsComponent } from './components/mainNews/mainNews.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MainNewsApiEffects } from './state/effects/mainNews-api.effects';
import { mainNewsReducer, mainNewsFeatureName } from './state/index';

@NgModule({
  declarations: [MainNewsContainerComponent, MainNewsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(mainNewsFeatureName, mainNewsReducer),
    EffectsModule.forFeature([MainNewsApiEffects]),
  ],
  exports: [MainNewsContainerComponent]
})
export class MainNewsModule { }
