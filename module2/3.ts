{
  //
  //* Generic Type
  type GenericType<T> = Array<T>;

  // const rollNumbers: number[] = [2, 3, 45];
  //  const rollNumbers: Array<number> = [2, 3, 45];
  const rollNumbers: GenericType<number> = [2, 3, 45];

  // const mentors: string[] = ["A", "B", "C"];
  const mentors: GenericType<string> = ["A", "B", "C"];

  // const Boolean: boolean[] = [true, false, true];
  const Boolean: GenericType<boolean> = [true, false, true];

  const user: GenericType<{ name: string; age: number }> = [
    { name: "Sohan", age: 45 },
  ];
  // Generic Tuple
  type GenericTuple<X, Y> = [X, Y];
  const manus: GenericTuple<string, string> = ["A", "B"];

  // interace in generic type

  interface User {
    name: string;
    age: number;
  }
  const man: GenericType<User> = [
    {
      name: "Islam",
      age: 24,
    },
  ];

  //
}
