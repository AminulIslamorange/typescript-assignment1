//  Problem 1:find Even Number


function filterEvenNumbers(inputNumbers: number[]): number[] {
    return inputNumbers.filter((num) => num % 2 === 0);
}
// console.log(filterEvenNumbers([1, 15, 3, 59, 99, 4, 5, 6,10]));

// const evenNumbers=filterEvenNumbers([1, 2, 3, 4, 5, 6,10,11,12,50]);
// console.log (evenNumbers);

// --------------------------------Solve-------------------------


// Problem 2:   reverseString


type MyInputString = string;

function reverseString(text: MyInputString): string {
    return text.split("").reverse().join("");
};

// const result = reverseString("typescript");

// console.log(`"${reverseString("typescript")}"`);

// ---------------------------solve-------------------------------

// problem :3   Cheak  a input is string or number


type StringOrNumber= string | number;


const checkType=(myInput:StringOrNumber)=>{
    if(typeof myInput === 'string'){
        return '"String"';

    }else if(typeof myInput==='number'){
        return '"Number"';
    }

}
//  console.log(checkType('aminul'));

// ---------------------solve-------------------------------



