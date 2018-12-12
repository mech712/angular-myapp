import { Component, OnInit } from '@angular/core';
import {CountService} from '../count.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  
  //private _nocommon:boolean = false;
  
  constructor(private countService:CountService){}
  
  ngOnInit() {
  }
  
  increase(){this.countService.increment();}
  decrease(){this.countService.decrement();}

  /*@Input() set nocommon(b:boolean){ 
      this._nocommon=b;
      if (this._nocommon) this.countService = new CountService();
  }*/
  
  get count():number {return this.countService.count;}



}
