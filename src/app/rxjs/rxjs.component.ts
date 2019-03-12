import { Component, OnInit } from '@angular/core';
import {map,filter,tap} from 'rxjs/operators';
import {of,from,fromEvent,pipe,interval } from 'rxjs';





@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})

export class RxjsComponent implements OnInit {
  
  exampleOF:any;
  constructor() { }

  ngOnInit() {
    this.of();
  }
  sourceOF = of(1, 2, 3, 4, 5); // of

 of(){    
      this.exampleOF = this.sourceOF.pipe(
        tap(val => console.log(`BEFORE MAP: ${val}`)),
        map(val => val + 10),
        tap(val => console.log(`AFTER MAP: ${val}`))
      );
        this.exampleOF.subscribe(val => console.log(val));
 }
 
 ofNext(){
  //this.sourceOF.next();
 }
  
}
