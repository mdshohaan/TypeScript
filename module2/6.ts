{
  // Constarint in typescript

  const addCourseToStudent = <T extends { name: string; age: number }>(
    student: T
  ) => {
    const course = "Next Level Web Dev";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent<{
    name: string;
    age: number;
    hasWatch: string;
  }>({
    name: "ABCD",
    age: 24,
    hasWatch: "5LLB",
  });

  const student3 = addCourseToStudent({ name: "Irfan", age: 22, emni: "emni" });

  //
}
