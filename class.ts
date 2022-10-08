class Car{
    engine:string;
    constructor(engine:string)
    {
        this.engine=engine;

    }

    disp (): void{
        console.log("engine is "+this.engine);
    }
    }

var ob = new Car("v342ff");

console.log(ob.engine);

