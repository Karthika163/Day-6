 // Q1:https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md/
class Movie {
    constructor(title,studio,rating="PG")
    {
this.title = title;
this.studio = studio;
this.rating = rating;
    }
     set ratingMovie(rating)
     {
        return this.rating = rating;
    }
}
var obj = new  Movie("Casino royale","Eon productions","PG13")
console.log(obj.title);
console.log(obj.studio);
console.log(obj.rating);
var obj1 = new Movie("Casino royale","Eon productions")
console.log(obj.title);
console.log(obj.studio);
console.log(obj.rating);

//Q2: https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    get radiusCircle()
    {
        return this.radius;
    }
    set radiusCircle(radius)
    {
        this.radius = radius;
    }
    get colorCircle()
    {
        return this.color;
    }
    set colorCircle(color)
    {
        this.color = color;
    }
    get toString()
    {
        return `"Circle[radius=${this.radius},color=${this.color}]"`;
    }
    get areaCircle()
    {
        return Math.PI * this.radius * this.radius;
    }
    get circumference()
    {
        return 2 * Math.PI * this.radius;
    }

}
var round = new Circle(1.0,"red");
console.log(round.radiusCircle);
round.radiusCircle = 5.5;
console.log(round.radiusCircle);
console.log(round.colorCircle);
round.colorCircle = "green";
console.log(round.colorCircle);
console.log(round.toString);
console.log(round.areaCircle);
console.log(round.circumference);

//Q3:Write a “person” class to hold all the details.
class Person {
    constructor(name,age,gender,salary)
    {
        this.name = name;
        this.age=age;
        this.gender=gender;
        this.salary=salary
    }
}
var obj9 = new Person("karsa","25","male","50000")
var obj6 = new Person("sathika","20","female","60000")
var obj7= new Person("kathir","26","male","80000")
var obj8 = new Person("hazana","23","female","60000")

console.log(obj9.name);
console.log(obj6.age);
console.log(obj7.gender);
console.log(obj8.salary);

//uber price methode 2:
class  UberPrice{
    constructor(kilometer,price=50)
{
    this.kilometer = kilometer;
    this.Price = price;
} get price(){
    return this.kilometer*this.price;
}
}var uber1 = new UberPrice(5);
var uber2 = new UberPrice(5,125);
console.log(uber1.Price);
console.log(uber2.Price);

