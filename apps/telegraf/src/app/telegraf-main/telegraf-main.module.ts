import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelegrafMainComponent } from './components/telegraf-main/telegraf-main.component';
import { TelegrafMainContainerComponent } from './components/telegraf-main-container/telegraf-main-container.component';
import { MainTabsComponent } from './components/main-tabs/main-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [TelegrafMainComponent, TelegrafMainContainerComponent, MainTabsComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    TelegrafMainContainerComponent
  ]
})
export class TelegrafMainModule { }
