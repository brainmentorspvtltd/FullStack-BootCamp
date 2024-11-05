var products = ["TV", "Mobile", "LED"];
var names:string[] = ["Amit", "Anil"];
var phones:Array<number>;
phones = [1111,23334,4455];

// Tuples
var record = [1001, "Amit", "Delhi"];
record.push(1002);
console.log(record);

var records:[number, string, boolean]= [1001, "Tim", true];
console.log(records);
console.log(records[0]);
console.log(records[1]);

var obj:{id:number, name:string} = {id:1001, name:'Amit'};
console.log(obj.id);
console.log(obj['id']);

