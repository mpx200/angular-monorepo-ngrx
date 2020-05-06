import { NewsModule } from './news/news.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterModule } from './footer/footer.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appMetaReducers, appReducer } from './state';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooterModule, HeaderModule, NewsModule,
    StoreModule.forRoot(appReducer, {
      metaReducers: appMetaReducers
    }), EffectsModule.forRoot([]), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
