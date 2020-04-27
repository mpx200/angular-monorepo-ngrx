import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HeaderApiEffects } from './state/effects';
import { headerReducer } from './state/reducers';
import { headerFeatureName } from './state/reducers/reducers-info';
import { HeaderContainerComponent } from './components/header-container/header-container.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderContainerComponent, HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(headerFeatureName, headerReducer),
    EffectsModule.forFeature([HeaderApiEffects]),
  ],
  exports: [HeaderContainerComponent]
})
export class HeaderModule { }
