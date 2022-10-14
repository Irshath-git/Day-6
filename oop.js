//1.Movie using class
class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    
        if(this.rating==undefined){
            this.rating = "PG13"
        }
        else{
            this.rating = rating;
        }
    }

    getpg(b){
        for(let i=0;i<b.length; i++){
            if(b[i].rating="PG13"){
                return `${b[i].name} ${b[i].studio} ${b[i].rating}`;
            }
        }
    }
}

let c1 = new Movie("Casino Royale","Eon Productions","PG13");
console.log(c1);
console.log(c1.getpg([{name:"KGF",studio:"xyzstudios",rating:"PG13"},{name:"beast",studio:"yzfstudios",rating:"R"}]))

//2.Circle using class
class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    toString(){
        return `circle [${this.radius}, ${this.color}]`; 
    }

    getarea(){
        return `${Math.PI*this.radius*this.radius}`;
    }

    getcircumference(){
        return `${2*Math.PI*this.radius}`;
    }
}

const circ = new Circle("1.0","Red")
console.log(circ)
console.log(circ.toString());
console.log(circ.getarea());
console.log(circ.getcircumference());


//3.Write a “person” class to hold all the details.

class Person{
    constructor(firstname,lastname,age,email,mobno){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.email = email;
        this.mobno = mobno;
    }
}

let p1 = new Person("Irsh","S","22","abc@gmail.com","1234567890");
console.log(p1);

//4.write a class to calculate the uber price.

class Uber{
    constructor(price){
        this.price = price;
    }

    getamount(noofkms){
        return `Taxi fare : Rs.${noofkms*this.price}`;
    }
}

const amount = new Uber(60);
console.log(amount.getamount(100));