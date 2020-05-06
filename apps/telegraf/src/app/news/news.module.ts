import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { newsFeatureName } from '../news/state/reducers/news-reducers-info';
import { newsReducer } from '../news/state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { NewsApiEffects } from '../news/state/effects';
import { NewsComponent } from './components/news/news.component';
import { NewsContainerComponent } from './components/news-container/news-container.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [NewsComponent, NewsContainerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(newsFeatureName, newsReducer),
    EffectsModule.forFeature([NewsApiEffects]),
    MatCardModule
  ],
  exports: [NewsContainerComponent]
})
export class NewsModule {}
