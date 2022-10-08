var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("engine is " + this.engine);
    };
    return Car;
}());
var ob = new Car("v342ff");
console.log(ob.engine);
