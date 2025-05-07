const test = "Hello";
const ageName: [number, string] = [1, "ss"]; // tuple

const user: {
  company: "Programming hero"; // literal types
  firstName: string;
  middleName?: string; // optional types
  lastName: string;
} = {
  company: "Programming hero",
  firstName: "Mohammad",
  lastName: "Islam",
};

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 2);

const poorUser = {
  name: "ARif",
  isBalance: 0,
  addBalance(balance: number): string {
    return `My new Balance is ${this.isBalance + balance}`;
  },
};

const arr: number[] = [1, 2, 3];
const newArr: number[] = arr.map((ele: number): number => ele * ele);

// spread operator
const bros1: string[] = ["A", "B", "C"];
const bros2: string[] = ["D", "E", "F"];
bros1.push(...bros2);
console.log(bros1);

// rest operator
const greetFriends = (...friends: string[]) => {
  friends.forEach((friend: String) => console.log(friend));
};
greetFriends("Abul", "Babul");

// destructuring
const myFriends = ["A", "B", "C", "D", "E"];
const [, , bestFriend, ...rest] = myFriends;

// type Alias
type Students = {
  name: string;
  id: number;
  number?: string;
  Address: string;
};

const studens1: Students = {
  name: "Arif",
  id: 23,
  Address: "DHAKA",
};
const studens2: Students = {
  name: "Akib",
  id: 21,
  Address: "CTG",
};

type UserName = string;
const userName: UserName = "IRFAN";

// function alias
type Add = (num1: number, num2: number) => number;
const addNumber: Add = (num1, num2) => num1 + num2;

// Union Type
type FrentendDeveloper = "FakibajDeveloper" | "JuniorDeveloper";
const newDeveloper: FrentendDeveloper = "JuniorDeveloper";

type User = {
  name: string;
  email?: string;
  gender: "male" | "Female";
  bloodGroup: "A+" | "B+" | "AB+";
};
const user1: User = {
  name: "IRFAN",
  gender: "male",
  bloodGroup: "AB+",
};
// Intersection type
type DeveloperSkills = {
  skills: string[];
};

type FrontendDeveloper = DeveloperSkills & {
  designation1: "Frontend Developer";
};

type BackendDeveloper = DeveloperSkills & {
  designation2: "Backend Developer";
};

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper: FullstackDeveloper = {
  skills: ["HTML", "CSS", "JS", "DB"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};
// Nullish Coelesing Operator
const isAuthenticate = "";
const res = isAuthenticate ?? "Guest";
