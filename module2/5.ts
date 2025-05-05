{
  //
  // Function with Generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  interface GenObj {
    id: number;
    name: string;
  }

  const resGenericObj = createArrayWithGeneric<GenObj>({
    id: 123,
    name: "AA",
  });

  // with Tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resTuple = createArrayWithTuple<string, number>("Bangladesh", 222);
  const resTuple2 = createArrayWithTuple<string, { name: string }>(
    "Bangladesh",
    {
      name: "Asia",
    }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Dev";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "ABCD",
    age: 24,
    hasWatch: "5LLB",
  });

  //
}
