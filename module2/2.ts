{
  //
  //Interface

  type User1 = { name: string; age: number };

  type UserWithRole = User1 & { role: string };

  interface User2 {
    name: string;
    age: number;
  }
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: UserWithRole = {
    name: "Irfan",
    age: 24,
    role: "Manager",
  };
  const user2: UserWithRole2 = {
    name: "Irfanul Islam",
    age: 24,
    role: "Admin",
  };
  // array and object are function

  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  // function

  type Add = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //
}
