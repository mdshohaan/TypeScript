{
  //
  class Animal {
    // name: string;
    // species: string;
    // sound: string;
    // parameter properties =>  public name: string,
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      // this.species = species;
      // this.sound = sound;
    }
    makeSound() {
      console.log(`The ${this.name} makes ${this.sound}`);
    }
  }

  const dog = new Animal("German shepherd", "dog", "ghew");
  dog.makeSound();
  //
}
