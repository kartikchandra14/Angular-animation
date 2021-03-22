import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftPageComponent } from './left-page/left-page.component';
import { RightPageComponent } from './right-page/right-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CardsComponent } from './cards/cards.component';

// IMAGE directive for image not found issue fix
import{  DefaultImageDirective } from './directives/default-image.directive';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPageComponent,
    RightPageComponent,
    AboutPageComponent,
    CardsComponent,
    DefaultImageDirective,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
