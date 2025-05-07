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

  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const res = getProperty(user, "age");
  console.log(typeof res); // string

  //
  type Result<T> = {
    [J in keyof T]: boolean;
  };
  const resultTest: Result<IUser> = {
    name: true,
    age: true,
  };
}
