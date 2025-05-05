export type TObj = {
  name: string;
  age: number;
  education?: {
    instituion: "University" | "College" | "Diploma";
    level: string;
  };
};

const obj: TObj = {
  name: "Irfan",
  age: 24,
  education: {
    instituion: "College",
    level: "Next",
  },
};
