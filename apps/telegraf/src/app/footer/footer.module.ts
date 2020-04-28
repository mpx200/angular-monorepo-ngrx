import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterContainerComponent } from './components/footer-container/footer-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FooterApiEffects } from './state/effects/footer-api.effects';
import { footerReducer, footerFeatureName } from './state';


@NgModule({
  declarations: [FooterContainerComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(footerFeatureName, footerReducer),
    EffectsModule.forFeature([FooterApiEffects]),
  ],
  exports: [FooterContainerComponent]
})
export class FooterModule { }
