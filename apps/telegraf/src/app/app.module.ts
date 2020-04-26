import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@telegraf/app.component';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
