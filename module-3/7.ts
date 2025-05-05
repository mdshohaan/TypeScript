{
  //Abstraction

  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements Vehicle {
    startEngine(): void {
      console.log(`The car start`);
    }
    stopEngine(): void {
      console.log("the car stopped");
    }
    move(): void {
      console.log("The car moved");
    }
    test() {
      console.log("I am testing");
    }
  }

  //
}
