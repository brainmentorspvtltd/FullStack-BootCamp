// Enum
// Enums are a way of defining named constants that can be numeric or string based
enum Directions{
    LEFT=10, RIGHT, TOP, BOTTOM
}
let myDirection:Directions = Directions.BOTTOM | Directions.TOP;
if(myDirection == Directions.BOTTOM){
    console.log('Logic');
}
console.log(myDirection);

enum Status {
    SUCCESS ="S",
    FAIL = "F"
}
let result:Status = Status.SUCCESS;
console.log(result);

// if(10>2){
//     myDirection = Directions.TOP;
// }

switch(myDirection){
    case Directions.BOTTOM:
           console.log('Bottom Operation');
           break; 
     case Directions.RIGHT:
        console.log('Right Operation');
        break;      
}