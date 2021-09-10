import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetQuestionsService } from '../services/get-questions.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  counter: number | any;
   items: any;
   dispNone:boolean = true;
   
  constructor( private data: GetQuestionsService , private router: Router) {
    this.data.ifCounter();
    this.counter = data.counter;
     if (localStorage.getItem("counter") != null){
      this.counter = JSON.parse(localStorage.getItem('counter') || '{}');
      }
    }


   getquestin(){
      this.items = this.data.myObj.find((item: any)=>{
        return  item.id == this.counter;
      });
   }

    sumCorAnswers(num:number)
    {
        if((num == 1 && this.items.flag=="correct") || (num == 0 && this.items.flag == "incorrect")){
          this.data.correctAnswers++;
        }
    }

   getFlag(num:number){
     
     if(this.counter < 11){
      this.sumCorAnswers(num);
        this.router.navigate(['card-answer'], {state:this.items});
     }
     return
   }

  ngOnInit(): void {
    this.getquestin()
  }

  ngDoCheck(){
    
  }

}
