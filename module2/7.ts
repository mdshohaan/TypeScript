{
  //
  //generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type owner = "bike" | "car" | "ship"; //  manually
  type owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "XX",
    age: 26,
    address: "CTG",
  };
  const result = getPropertyValue(user, "name");

  //
}
