//Primitives: number, string, boolean
//Arrays, objects


let age: number = 20;
let userName: string = 'Daniel';
let isInstructor: boolean = false;

let hobbies: string[];

hobbies = ['Sports', 'Play games'];

let person: Person;

type Person = {
    name: string;
    age: number;
}
person = {
    name: 'Daniel',
    age: 20,

};

let people: Person[];

//Type inference
let course: string | number = 'React - The complete Guide';

course = 123456;


//Function and types

function addTest(a: number, b: number): number {
    return a + b;
}


function printOutput(value: any) {
    console.log(value);
}


//Generics

function insertAtBeginning<T>(array: T[], value:T){

    const newArray = [value, ...array];

    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3]

