

export class Counter{
    private _value:number = 0;
    constructor(){

    }

    public increment(){
        this._value++;
    }

    public decrement(){
        this._value--;
    }

    public get value(){
        return this._value;
    }

}