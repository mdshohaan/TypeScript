{
  // OOP Inheritance
  // Parent Class
  class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`This ${this.name} man will sleep ${numOfHours}`);
    }
  }
  // child class

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student1 = new Student("Arif", 23, "CTG");

  //
  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`This ${this.name} taking class for ${numOfClass}`);
    }
  }
  const teacher = new Teacher("rana", 63, "DK", "professor");

  //
}
