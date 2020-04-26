import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterContainerComponent } from './components/footer-container/footer-container.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [FooterContainerComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [FooterContainerComponent]
})
export class FooterModule { }
