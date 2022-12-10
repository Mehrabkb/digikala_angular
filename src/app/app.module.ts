import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeComponent } from './home/home.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    HomeSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
