{
  // type guard

  // typeof

  type AlphaNumeric = string | number;

  const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString + param2.toString();
    }
  };
  const res1 = add(2, 3);
  const res2 = add("2", "3");

  // in Guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: string;
  };
  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and My role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };
  const normalUser: NormalUser = {
    name: "Mr NOrmal",
  };
  const adminUser: AdminUser = {
    name: "Mr Admin",
    role: "admin",
  };

  // getUser(normalUser);
  // getUser(adminUser);

  //
}
