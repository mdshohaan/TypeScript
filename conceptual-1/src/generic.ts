{
  // Generic
  interface IUser {
    name: string;
    age: number;
  }
  function identity<T>(value: T): T[] {
    return [value];
  }
  interface IYouLearner<T> extends IUser {
    attitude: T;
  }
  const user: IYouLearner<string | number> = {
    name: "AAA",
    age: 34,
    attitude: 2,
  };
}
