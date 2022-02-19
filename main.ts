let num = 10;
num = num + 100;
// console.log(num);

//ts-node 

// number, string, boolean, undefined, any....  Intefaces and Enums

let total: number = 0;

let values: number[] = [10, 15, 20, 100, 50, 25]

values.forEach(element => {
    total = total + element;
});

console.log(total);

// let isLoading: boolean = false;

const addNumbers = (num1: number, num2: number) => {
    return num1 + num2;
}

let result =  addNumbers(100,50)
console.log(result);

interface Post {
    id: string;
    title: string;
    description: string
}

interface Person {
    name: string;
    age: number;
    gender: Gender;
    email: string;
    posts?: Post[];
    level: Level
}

enum Level {
    BEGINNER = 'beginner',
    INTERMEDIATE = 'intermediate',
    EXPERT = 'expert'
}

enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

const person1Obj: Person = {
    name: 'Olayinka',
    age: 24,
    gender: Gender.MALE,
    email: 'olayinkafamutimi@gmail.com',
    posts: [
        {
            id: '1',
            title: 'Some Title',
            description: 'Som Description'
        }
    ],
    level: Level.BEGINNER
} 

const person2Obj: Person = {
    name: 'Ope',
    age: 28,
    gender: Gender.MALE,
    email: 'olayinkafamutimi@gmail.com',
    posts: [],
    level: Level.BEGINNER
}

console.log(person1Obj, person2Obj);


// Task
// Typescript equivalent of the snippets below


// let post = [ 10, "Hello", true];
let post: any[] = [10, "Hello", true];

// let isBusy = false
let isBusy: boolean = false;

// i have a variable, "statuse" that can only have values of "off" and "on";
enum Stage {
    OFF = 'off',
    ON = 'on'
}
let statuse: Stage = Stage.OFF ;

// Write a function to return the the last alphabet in a given string
const lastAlpha = (word: string) => {
    return word[word.length-1]
}


