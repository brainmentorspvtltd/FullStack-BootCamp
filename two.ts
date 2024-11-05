// unknown vs any vs never
var e:any ;
e = 100;
e = "ram";
e = true;
//e.toUpperCase();
e = [10,20];
e = {};


var g:unknown;
g = 1000;
g = "Amit";
if(typeof g  === 'string'){
console.log(g.toUpperCase());
}

function show() : never{
    throw new Error('Something went Wrong');
}
var h5 = show();
console.log('Never ', h5)

function show2() :never{
    while(true){

    }
}
