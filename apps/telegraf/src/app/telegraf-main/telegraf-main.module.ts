import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelegrafMainComponent } from './components/telegraf-main/telegraf-main.component';
import { TelegrafMainContainerComponent } from './components/telegraf-main-container/telegraf-main-container.component';
import { MainTabsComponent } from './components/main-tabs/main-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MainTabPopularComponent } from './components/main-tab-popular/main-tab-popular.component';
import { MainTabCommentsComponent } from './components/main-tab-comments/main-tab-comments.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [TelegrafMainComponent, TelegrafMainContainerComponent, MainTabsComponent, MainTabPopularComponent, MainTabCommentsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
    ],
  exports: [
    TelegrafMainContainerComponent
  ]
})
export class TelegrafMainModule { }
