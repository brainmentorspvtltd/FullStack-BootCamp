var a = 10; // Type Inference (Implicit Type)
//a = "Amit";
a = 100;
a =90.20;
//a = true;

var b:number ; // Explicit Type
b = 200;
//b = "Amit";

//var c= 1000/[];
var obj = {id:1001, name:'Amit'};
//console.log(obj.city);
function show(x:number, y:number):void{
    console.log(x + y);
}
show(100, 200);