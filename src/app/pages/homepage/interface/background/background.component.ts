import { Component, OnInit } from '@angular/core';
//import { error } from 'console';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  observer=new Observable(subscriber=>{
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(()=>{
      subscriber.complete();
    })

  })
  constructor() { }

  ngOnInit(): void {
    
  }

  name="ABC";
  btnclick(name:string){
    alert('HI~'+name);
  }

  showlog(){
    console.log('just before subscribe');
    this.observer.subscribe({
      next(x){ console.log(x);},
      error(err){console.error('something wrong'+err);},
      complete(){console.log('done');}
    });
  }
}
