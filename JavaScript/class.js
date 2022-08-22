// class definition

class Vehicle {
    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }
    getDetails(){
        return `the name of the bike ${this.name}`;
    }
}

let bike1 = new Vehicle("Ninja","Kawasaki","V6");
console.log(bike1.getDetails());