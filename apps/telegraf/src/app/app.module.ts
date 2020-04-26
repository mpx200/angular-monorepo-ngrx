import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterModule } from './footer/footer.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appMetaReducers, appReducer } from './state';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooterModule,
    StoreModule.forRoot(appReducer, {
      metaReducers: appMetaReducers
    }), EffectsModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
