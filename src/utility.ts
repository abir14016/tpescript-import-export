//Pick type
interface Person {
  name: string;
  email?: string;
  contactInfo: string;
}

type Contact = Pick<Person, "email" | "contactInfo">;

//Omit type
type Name = Omit<Person, "email" | "contactInfo">;

//Partial and Required

//to make all the properties to be optional use Partial
type Optional = Partial<Person>;

//to make all the properties to be required use Required
type RequiredProps = Required<Person>;

//Readonly Type
const person1: Readonly<Person> = {
  name: "Abir",
  email: "abc@gmail.com",
  contactInfo: "jhdjsh",
};

//Record Type

// type myObj= {
//     a:string;
//     b:string;
//     c:string;
// }

//index signature

// type myObj = {
//     [index: string] : string
// }

// type myObj = Record<string,string>
type myObj = Record<"a" | "b" | "c", string>;

const obj1: myObj = {
  a: "1",
  b: "2",
  c: "4",
};
