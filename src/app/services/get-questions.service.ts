import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsService {

    counter:number=1;
    ifCounter(){
        if(localStorage.getItem('counter') !=null){
            this.counter = JSON.parse(localStorage.getItem('counter') || '{}');
        }
    }

    correctAnswers =0;
  myObj:any = [

    {
        "id":1,
        "question":"Səs dalğaları suyun altında havaya nisbətən daha sürətlidir.",
        "answer":"Səs dalğaları suyun altında havaya nisbətən 4.3 dəfə daha sürətlə yayılır.",
        "img":"1.svg",
        "flag":"correct"
    },
    {
        "id":2,
        "question":"Qadınların ürəyi kişilərə nisbətən daha sürətlə döyünür.",
        "answer":"Bəli, bəli. Zərif cinsin nümayəndələrinin ürəyi daha sürətlə döyünür.",
        "img":"2.svg",
        "flag":"correct"
    },
    {
        "id":3,
        "question":"Araxnafobiya sürətdən qorxma xəstəliyidir.",
        "answer":"Araxanafobiya hörümçəklərdən qorxmadır. Taxafobiya sürətdən qorxma xəstəliyidir. Amma Bakcell abunəçiləri bundan narahat deyil😊 ",
        "img":"3.svg",
        "flag":"incorrect"
    },
    {
        "id":4,
        "question":"Soyuq suyada molekullar daha sürətlə hərəkət edir.",
        "answer":"Suyun temperaturu artdıqca moelkullar sürəti 650 m/saniyəyə qədər artır. Onlar bir-birinə dəyəndə səs yaranır ki,bu da suyun qaynaması zaman çıxan səsdir. ",
        "img":"4.svg",
        "flag":"incorrect"
    },
   
    {
        "id":5,
        "question":"Yer planetində ən sürətli canlı heparddır. ",
        "answer":"Hepard 96 km/saata qədər sürət yığa bilir və o doğurdan da ən sürətli heyvandır. Amma şahin (sapsan) 300 km/saatdan çox sürət yığa bilir.",
        "img":"5.svg",
        "flag":"incorrect"
    },
    {
        "id":6,
        "question":"Günəş işığı Yerə 21 dəqiqəyə çatır.",
        "answer":"8.3 dəqiqəyə Günəş işığını Yerdə görürük. ",
        "img":"6.svg",
        "flag":"incorrect"
    },
    {
        "id":7,
        "question":"Bakcell.com saytına girənlərin 45%-i mobil telefondan daxil olur.",
        "answer":"Mobil cihazlardan girənlərin sayı daha çoxdur – 72%. Planşetlərdən girənlər – 2%, masaüstü kompüterlərdən isə 26%.",
        "img":"7.png",
        "flag":"incorrect"
    },
    {
        "id":8,
        "question":"Yer kürəsində ən güclü güləklər Bakıda əsir",
        "answer":"Əslində Bakı küləklər şəhəridir, amma ən sürətlə əsasən küləklər Antarktidada, Viktoriya dərəsində olur. Küləyin sürəti 215 m/saniyəyə çatır.",
        "img":"8.svg",
        "flag":"incorrect"
    },
    {
        "id":9,
        "question":"İnsanın qaçma rekordu 250 km/saatdır.",
        "answer":"İndiyə qədər qeydə alınmış ən böyük sürət rekordu 48,7 km/saatdır.  ",
        "img":"9.svg",
        "flag":"incorrect"
    },
    {
        "id":10,
        "question":"Azərbaycanın ən sürətli mobil şəbəkəsi Bakcell-dədir.",
        "answer":"Ookla-nın apardığı testlərin nəticəsinə görə artıq neçə ildir ki, Bakcell-in mobil şəbəkəsi Azərbaycanda ən sürətlidir.",
        "img":"10.png",
        "flag":"correct"
    }
]

   checkCounter(){
       if(this.counter <11){
        this.counter+=1;
        localStorage.setItem("counter",JSON.stringify(this.counter))
       }
   }

  constructor() { }
}
