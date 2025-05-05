{
  // Mapped types
  const arrOfNumbers: number[] = [2, 3, 4, 5];
  const arrOfStringhs: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );
  // console.log(arrOfStringhs);

  type AreaNumber = {
    height: number;
    width: number;
  };
  type Height = AreaNumber["height"]; // look up type
  type AreaStrings = {
    [key in keyof AreaNumber]: string;
  };

  // Utility Type
  //pick
  type Person = {
    name: string;
    age: number;
    email?: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //
}
