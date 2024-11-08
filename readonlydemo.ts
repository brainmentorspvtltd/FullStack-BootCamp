// const vs readonly
const MAX:number = 100;
// MAX = 200;
class A{
    //readonly MIN:number = 1;
    readonly MIN:number;
    readonly MAX:number ;
    y:number;
    constructor(x:number, y:number){
        this.MIN = x;
        this.MAX = x;
        this.y = y;

    }
    plus():void{
        //this.MAX++;
        //this.y++;
    }
}
let obj:A = new A(100,200);
//obj.MIN = 999;
//obj.MAX =300;
obj.y = 1000;
console.log(obj.MIN , obj.MAX);