{
  interface User {
    name: string;
    age: number;
  }
  interface UserWithRole extends User {
    role: string;
  }
  const User1: UserWithRole = {
    name: "Irfan",
    age: 23,
    role: "admin",
  };
  console.log(User1);
  //
}
