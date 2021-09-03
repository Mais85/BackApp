import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardAnswerComponent } from './card-answer/card-answer.component';
import { CardsComponent } from './cards/cards.component';
import { FinisPageComponent } from './finis-page/finis-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:"", component:HomeComponent },
  {path:"cards", component:CardsComponent},
  {path:"card-answer", component:CardAnswerComponent},
  {path: "finisPage", component: FinisPageComponent },
  { path: '**', redirectTo: ""  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
