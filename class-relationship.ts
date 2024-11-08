// IS -A , HAS-A
class Person{
    protected id:number;
    protected name:string;
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
    show():void{
        console.log(`Id ${this.id} Name ${this.name}`);
    }
}
class Order{
    constructor(public orderId:number , public amount:number){


    }
    printOrderDetails():void{
        console.log(`Order Id ${this.orderId} Amount ${this.amount}`);
    }
}
class Customer extends Person {
    balance:number;
    discount:number;
    // Has - A
    order:Order = new Order(999, 2999);
    constructor(balance:number, discount:number, id:number, name:string){
        super(id, name);
        this.balance  = balance;
        this.discount = discount;

    }
    show():void{
        super.show();
        console.log(`Balance ${this.balance} Discount ${this.discount}`);
        this.order.printOrderDetails();
    }
}
let amit:Customer = new Customer(100000, 20, 1001, 'Amit');
amit.show();

