import { Injectable, OnInit, EventEmitter } from '@angular/core';
import {Counter} from './counter'


@Injectable({
  providedIn: 'root'
})
export class CountService implements OnInit{

  public changed:EventEmitter<Counter> = new EventEmitter<Counter>();

  constructor(private _counter:Counter){}

  ngOnInit(){
    this.changed.emit(this._counter);
  }
  
  public increment(){
    this._counter.increment();
    this.changed.emit(this._counter);
  }
  
  public decrement(){
    this._counter.decrement();
    this.changed.emit(this._counter);
  }

  public get value(){ return this._counter.value;}
    
}