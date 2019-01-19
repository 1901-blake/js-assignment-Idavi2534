/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function Person(first,age) {
    this.firstName = first;
    this.age = age;
    
  }




function objectProperties(someObj) {
    console.log(`The name of the person is ${someObj.firstName} , and their age is ${someObj.age}`);
   
}

let studentGirl= new Person("Iman", 23);
let studentBoy=new Person("Potato", 65);

objectProperties(studentGirl);
objectProperties(studentBoy);



    
