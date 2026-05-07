//  Problem 1:find Even Number


function filterEvenNumbers(inputNumbers: number[]): number[] {
    return inputNumbers.filter((num) => num % 2 === 0);
}

const evenNumbers=filterEvenNumbers([1, 2, 3, 4, 5, 6,10,11,12,50]);


// --------------------------------Solve-------------------------


// Problem 2:   reverseString


type MyInputString = string;

function reverseString(text: MyInputString): string {
    return text.split("").reverse().join("");
};

const getReverseString =`"${reverseString("typescript")}"`;




// ---------------------------solve-------------------------------

// problem :3   Cheak  a input is string or number


type StringOrNumber = string | number;


const checkType = (myInput: StringOrNumber) => {
    if (typeof myInput === 'string') {
        return '"String"';

    } else if (typeof myInput === 'number') {
        return '"Number"';
    }

}
const inputValue=checkType(20)
 

// ---------------------solve-------------------------------


// problem:4 

type user = {
    id: number;
    name: string;
    age: number;

}
const getProperty=<X,K extends keyof X>(obj:X,key:K):X[K]=>{
    return obj[key];
};

const user = { id: 1, name: "Usman Hadi", age: 33 };
// const result = getProperty(user, 'name')

const userDetails=(getProperty(user, "name"))

const userResult=JSON.stringify(userDetails)



            // ------------------Solve----------------------


// Problem 5:    


interface Book {
    title: string;
    author: string;
    publishedYear: number;
   
}
const toggleReadStatus=(myBook:Book)=>{
    return{
        ...myBook,
        isRead:true
    }
};

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

const finisedRead=toggleReadStatus(myBook);


   // -------------------solve---------------------


//    Problem :6


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

   getDetails():string {
        return`"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
    }
}

const student = new Student("Abu Sayid", 28, 'A+');
const detailsInfo=student.getDetails();




                            //  -------------solve------------------------

Probelem:7



    function getIntersection(array1: number[], array2: number[]): number[] {
      
        return array1.filter(item => array2.includes(item));
    }
     const commonNumber = getIntersection([1, 2, 3, 4, 5,12,99], [3, 4, 5,12, 6, 7,99]);

    
    
   





