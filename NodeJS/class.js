var person = {
    firstName: "Fname",
    lastName : "Lname",
    id       : 5,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  var p1=Object.create(person);
  console.log(p1.fullName());
  
  var emp={
    id:102,
    name:"disha navdiya",
    salary:40000
  }  
  console.log(emp.id+" "+emp.name+" "+emp.salary);  
  
  
  var emp1=new Object();  
  emp1.id=101;  
  emp1.name="krishna chavda";  
  emp1.salary=50000;  
  console.log("<br><br>"+emp1.id+" "+emp1.name+" "+emp1.salary); 
  
  function emp2(id,name,salary){  
  this.id=id;  
  this.name=name;  
  this.salary=salary;  
  }  
  e=new emp2(103,"utsav patel",30000);  
    
  console.log("<br><br>"+e.id+" "+e.name+" "+e.salary);  
  
  
  class Bike  
  {  
    constructor(company)  
    {  
      this.company=company;  
    }  
  }  
  class Vehicle extends Bike {  
    constructor(company,name,price) {  
     super(company);  
      this.name=name;  
      this.price=price;  
    }   
  }  
  var v = new Vehicle("Suzuki","Yamaha",70000);  
  console.log(v.company+" "+v.name+" "+v.price);  
