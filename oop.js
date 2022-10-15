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
class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    
    getArea() {
        return (Math.PI * Math.pow(this.radius, 2));
    }
    getCircumference() {
        return (2 * Math.PI * this.radius);
    }
    getColor() {
        return this.color;
    }
}
let circleDetails = new Circle(5, "red");

console.log(circleDetails.getColor());
console.log(circleDetails.getArea().toFixed(2));
console.log(circleDetails.getCircumference().toFixed(2));


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
