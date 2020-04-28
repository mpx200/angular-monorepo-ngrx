import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@telegraf/app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { TelegrafMainModule } from './telegraf-main/telegraf-main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooterModule, HeaderModule, TelegrafMainModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
