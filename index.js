// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
        // const pi = Math.PI
    }

    diameter(){
        return this.radius * 2;
    }

    circumference(){
        return Math.PI * (this.radius) **2;
    }

    area(){
       return Math.PI * Math.sqrt(this.radius)
    }
}

const newCircle = new Circle(5)
console.log(newCircle.area())
console.log(newCircle.circumference())
