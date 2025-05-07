{
  // Type alias
  type TNickname = "Mohammad" | "Irfanul";
  const bondu: TNickname = "Mohammad";

  type A = { bondu: "vlo" };
  type B = { sotru: number };
  type AB = A & B;

  const robot: AB = {
    bondu: "vlo",
    sotru: 2,
  };

  const input = null;
  const userInput = input ?? "Guest";

  // type assertion
  let nm: any = "Irfan";
  // console.log((<string>nm).length);
  console.log((nm as string).length);

  //type vs interface
  type Learner = {
    edu: "school";
  };
  type NewLearner = {
    instituion: "college";
  };
  type Combined = Learner & NewLearner;
  //
  interface IUser {
    name: string;
    age: 23;
  }
  interface ILearner extends IUser {
    attitude: "learning";
  }
}
