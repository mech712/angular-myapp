import { Component, OnInit } from '@angular/core';
import {CountService} from '../count.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  
  private count:number;

  constructor(private countService:CountService){}

  
  ngOnInit() {
    this.count = this.countService.value;
    this.countService.changed.subscribe(counter => {this.count=counter.value;});
  }
  
  increase(){
    this.countService.increment();
  }
  decrease(){
    this.countService.decrement();
  }

}
