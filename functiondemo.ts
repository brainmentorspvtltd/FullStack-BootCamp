// Function as a Type
var x:number ;
var add:(a:number, b?:number)=>number;
//add = (a:number, b:number)=>a+b;
add = (a:number, b?:number)=>a * (b||1);
//console.log(add(100));
// function optional arguments
// optional parameter

function adder4(x:number,z:number, y?:number, c?:number){
    return x + z + (y||0) + (c||1);
}
adder4(100,200);

// default parameter
function adder(a:number, b:number=0){
    return a + b;
}

function adder3(a:number, b:number=0, c:number=1):number{
    return a + b + c;
}

adder(10);

// rest parameters
function disp(...a:number[]){
    let sum  = 0;
    for(let e of a){
        sum = sum + e;
    }
    return sum;
}
console.log(disp(10,20));
console.log(disp(1,2,3,4,5,6));
console.log(disp());

function disp2(  x:number , ...b:string[]){
    console.log(x, b);
}
disp2(10, '90','100','amit','tim','tom');

function disp3(...x:(number|string)[]){
    console.log("Disp3 ", x);
}
disp3(10,20,30);
disp3("Amit","Tim", "tom");
