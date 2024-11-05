// Basic Types
// number, bigint, string, boolean, undefined, null, Symbol
// Explicit type
var a:number ;
a=100;
a =100.20;
//a= "Amit";
var b:bigint ;
b = 10004343442342424n;

var gg:null = null;

var g4:undefined = undefined;

var g5 = undefined;

var c:string;
c = "Amit";
c = 'Amit';
c = `this is a sample txt
this is another sample txt
`;
var d:boolean;
d = true;

// Type Inference
var f = 100; // Implicit way
//f = "Amit";
var f2 = "Amit";

var g:Symbol; 
g = Symbol();

// Reference type
var t = [10,20,30,40];
var t2:number[] = [100,200,300];
var t2:Array<number> = [1000,2000,3000];

var obj = {id:1001, name:'Ram'};

var emp:{id:number, name:string, city:string} = {id:1001, name:'Amit', city:'New Delhi'}; 

// number, string, boolean
// Wrapper
var companyName:String = "Brain Mentors";
var age:Number = 10;
var inDelhi:Boolean= true;


// union
var e:number|string ;
e = 1000;
e = "Amit";
//e = true;
var myobj :{id:number, name:string} | null ;
myobj = {id:1001, name:'Tim'};
myobj = null;

// any
var h;
h = 100;
h = true;
h = [100,200];
h = {};

var h2:any ;
h2 = 1000;
h2= true;


// unknown
var h3:unknown;
h3 = 100;
h3= "Ram";
h3 = true;
