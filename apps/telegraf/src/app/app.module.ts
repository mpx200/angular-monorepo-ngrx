import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@telegraf/app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooterModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
