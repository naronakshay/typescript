interface Person{
    fname : string,
    lname: string,
    sayHi : ()=> string;

}

var Customer:Person ={
    fname:"akshay",
    lname:"naron",

    sayHi:():string=>{
        return "HI THERE "
        }
}

console.log(Customer.fname);
console.log(Customer.lname);
console.log(Customer.sayHi);


var Emp:Person ={
    fname:"Irene",
    lname:"Jos",

    sayHi:():string=>{
        return "HI  "
        }
}

console.log(Emp.fname);
console.log(Emp.lname);
console.log(Emp.sayHi);
