import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService{
    private _count:number = 0;
    constructor(){}
    public increment(){this._count++;}
    public decrement(){this._count--;}
    get count(){return this._count;}
}