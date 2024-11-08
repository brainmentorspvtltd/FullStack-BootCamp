class Student{
    // access scope - public
    //private name:string;
    // protected rollno:number;
    // public att:boolean;
    constructor(private name:string, protected rollno?:number, public att:boolean= true){}
    // constructor(name:string);
    // constructor(name:string, rollno:number);
    // constructor(name:string, rollno:number, att:boolean);
    // constructor(name?:string, rollno?:number, att?:boolean){
        
    //     this.name = name || "";
        
    //     this.rollno = rollno ||0;
    //     this.att = att || false;
    // }
    public setName(name:string):void{
        this.name = name;
    }
    public getName():string{
        return this.name;
    }
    public show():void{
        console.log(`Rollno ${this.rollno} Name ${this.name} Att ${this.att}`);
    }
}
let amit:Student = new Student('Amit', 1001, true);
amit.show();