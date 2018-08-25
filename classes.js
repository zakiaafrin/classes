// function Automobile(wheels){
//     this.wheels = wheels;
//     this.setColor = (color)=>{
//         this.color = color
//     }
//     this.getColor = () =>{
//         return this.color
//     }
//  }

//  function Motorcycle(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//  }
//  Motorcycle.prototype = new Automobile(2)
 

//1.Exercise One:Make a Sedan class that is SIMILAR to Motorcycle, but also includes another property 
//‘doors’ and has a value of ‘4’.Make it inherit, using the prototype chain, from the Automobile class and have 4 wheels.

// function Sedan(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.doors = 4;
//  }
// Sedan.prototype = new Automobile(4);
//console.log(Sedan.doors)

//2.Exercise one:Make a new class that inherits from the Sedan class called Camry.It’s ‘Make’ should be Toyota 
//and it’s ‘model’ should be Camry. The year is irrelevant.Now make a new instance of Camry. Console
//log the amount of wheels and doors it has. Then set the year of the camry to ‘2010’. Then console.log that. 
//  function Camry(){
 
// }

// Camry.prototype = new Sedan ('Toyota', 'Camry', 2018 )
// The instance of the class
// const camry = new Camry()
// console.dir(camry)
// console.log(camry.wheels, camry.doors)

// camry.year = 2010
// console.log(camry.year)

//3.Recreate the Motorcycle class using ES6 style. Make sure it inherits from the Automobile class using the ‘Extends’
// keyword.
class Automobile{
    constructor(wheels){
        this.wheels = wheels
        this.color = "red"
    }
    setColor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
 }
// class Motorcycle extends Automobile {
//     constructor(make, model, year){
//         super(4)
//         this.make = make;
//         this.year = year;
//         this.model = model;
//     }
// }

//4.Example Two:Create a class called Maybach that inherits from the Sedan class using ES6 style. It’s ‘make’ is Mercedez 
//and its ‘model’ is Maybach. They year is 2012.Add two methods that are unique to Maybachs.
 class Sedan extends Automobile{
    constructor(make, model, year){
       super(4);
       
    }
 }
  
 class Maybach extends Sedan{
    constructor(make, model, year) {
        super('Mercedez', 'Maybach', 2012)
        this.make = make;
        this.year = year;
        this.model = model;
        this.table = "Folding Table"
    }
    setTable(table){
        this.table = table
    }
    getTable(){
        return this.table
    }
 }
  const maybach = new Maybach('Mercedez', 'Maybach', 2012)
  
 console.dir(maybach)
 console.log(maybach.table)
