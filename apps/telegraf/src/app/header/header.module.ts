import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './components/header-container/header-container.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [HeaderContainerComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderContainerComponent
  ]
})
export class HeaderModule { }
