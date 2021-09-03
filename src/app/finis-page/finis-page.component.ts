import { Component, OnInit } from '@angular/core';
import { GetQuestionsService } from '../services/get-questions.service';

@Component({
  selector: 'app-finis-page',
  templateUrl: './finis-page.component.html',
  styleUrls: ['./finis-page.component.css']
})
export class FinisPageComponent implements OnInit {

   correctAnswers: number = 0;
   point:number = 0;
  constructor( private data: GetQuestionsService) {  }

  linePoint(answers:number):any{
     
    switch(answers){

      case 0: 
      case 1:  this.point = 1;break;
      case 2:
      case 3:
      case 4:  this.point = 2;break;
      case 5:
      case 6:
      case 7:  this.point = 3;break;
      case 8: 
      case 9:  this.point = 4;break;
      case 10: this.point = 5;break;
    }
  }

  ngOnInit(): void {
    this.correctAnswers = this.data.correctAnswers;

    this.linePoint(this.correctAnswers);
    localStorage.clear();
  }

}
