import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CardsComponent } from './cards/cards.component';
import { LeftPageComponent } from './left-page/left-page.component';
import { RightPageComponent } from './right-page/right-page.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'right', component: RightPageComponent, data: { animation: 'isRight' } },
  { path: 'left', component: LeftPageComponent, data: { animation: 'isLeft' } },
  { path: 'cards', component: CardsComponent, }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
