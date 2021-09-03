import { AfterContentChecked, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetQuestionsService } from '../services/get-questions.service';

@Component({
  selector: 'app-card-answer',
  templateUrl: './card-answer.component.html',
  styleUrls: ['./card-answer.component.css']
})
export class CardAnswerComponent implements OnInit {

   item:any 
   flag:boolean = false;

  constructor( private route: ActivatedRoute, private router: Router, private objs: GetQuestionsService) { 
    this.objs.ifCounter();
    if(this.router.getCurrentNavigation()?.extras.state !=null){
      this.item = this.router.getCurrentNavigation()?.extras.state;
      localStorage.setItem("item", JSON.stringify(this.item))
    }else{
      if(localStorage.getItem("item") != null){
        this.item = JSON.parse(localStorage.getItem("item") || '{}');
      }
    }
  }


  checkEnd(){
    if(this.objs.counter < 10){
      return true;
    }else{
      this.objs.counter = 1;
      return false;
    }
 }
  counterChange(){
      this.objs.checkCounter();
  }

  ngOnInit(){
    if(this.item.flag == 'incorrect'){
      this.flag = false;
    }else if(this.item.flag == 'correct'){
      this.flag = true;
    }
  }

}
