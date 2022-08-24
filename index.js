class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // Complete the code!
  }
  fullname() {
    console.log(this.firstname + this.lastname);
  }

  email() {
    console.log(`${this.firstname}.${this.lastname}@company.com`);
  }
}

emp1 = new Employee("John", "Smith");
emp1.fullname(); //"John Smith"

emp2 = new Employee("Mary", "Sue");
emp2.email(); //"mary.sue@company.com"

emp3 = new Employee("Antony", "Walker");
console.log(emp3.firstname);
// "Antony"
