class student{ 
  constructor(name,id, dept){
     this.name= name; 
     this.id= id; 
     this.dept= dept;
    } 
  add_Email(email){ 
    this.email= email; } 
  getDetails(){ 
    console.log(`Name is ${this.name}, Id is ${this.id}, Email is: ${this.email}`); 
  } 
} 
let myStudent= new student('Budi',20060201);
myStudent.add_Email('budi@gmail.com'); 
myStudent.getDetails(); 