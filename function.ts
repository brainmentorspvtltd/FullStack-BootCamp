function show(x:number, y:number):number{
    return x + y;
}
console.log(show(100,200));
// show(10);

// show("100");

function show2(x:number):void{
    console.log('X is ', x);
   
}

async function cube(num:number):Promise<number>{
    const pr:Promise<number> = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(num**3);
        }, 5000);
    });
    return pr;
   
}
const p:Promise<number> = cube(3);
p.then((data:number)=>{
    console.log('Promise Result is ', data);
}).catch((err:Error)=>{
    console.log('Error is ', err);
})