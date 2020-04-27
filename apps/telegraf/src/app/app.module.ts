import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterModule } from './footer/footer.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appMetaReducers, appReducer } from './state';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { NewsContainerComponent } from './news/news-container/news-container.component';
import { NewsComponent } from './news/news/news.component';


@NgModule({
  declarations: [AppComponent, NewsContainerComponent, NewsComponent],
  imports: [BrowserModule, FooterModule, HeaderModule,
    StoreModule.forRoot(appReducer, {
      metaReducers: appMetaReducers
    }), EffectsModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
