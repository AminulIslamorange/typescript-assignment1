               Question No:4
 How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects?


Answer:

OOP-এর চার Pillar: Typescript এর বড় প্রজেক্টের জটিলতা কমানোর মূল চাবিকাঠি ।


বড় মাপের বা লার্জ-স্কেল সফটওয়্যার প্রজেক্টে কোড মেইনটেইন করা এবং এর জটিলতা কমানো সবচেয়ে বড় চ্যালেঞ্জ। Typescript অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP) এর চারটি প্রধান স্তম্ভ— Inheritance, Polymorphism, Abstraction, এবং Encapsulation—আমাদের কোডকে আরও সুশৃঙ্খল, রিইউজেবল এবং সহজ পাঠযোগ্য করতে সাহায্য করে।




1. Inheritance
Inheritance আমাদের একটি ক্লাসের বৈশিষ্ট্য অন্য ক্লাসে ব্যবহার করার সুযোগ দেয়। এর ফলে একই কোড বারবার লিখতে হয় না (DRY Principle)। বড় প্রজেক্টে যখন অনেকগুলো কমন বৈশিষ্ট্য থাকে, তখন একটি Base Class থেকে সেগুলো অন্য ক্লাসে ছড়িয়ে দেওয়া হয়।

সুবিধা: কোড duplication কমায় এবং reusability বাড়ায়।

একটি উদাহরণের মাধ্যমে দেখা যাক:

class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("ghew! ghew!");
    }
}
const myDog = new Dog();
myDog.move();



2. Encapsulation
Encapsulation মানে হলো ডেটাকে বাইরের অনাকাঙ্ক্ষিত হস্তক্ষেপ থেকে সুরক্ষিত রাখা। টাইপস্ক্রিপ্টে private, protected, এবং public মডিফায়ার ব্যবহার করে আমরা নির্ধারণ করতে পারি কোন ডেটা বাইরে থেকে দেখা যাবে এবং কোনটি যাবে না।

সুবিধা: এটি ইন্টারনাল লজিক সুরক্ষিত রাখে এবং বড় প্রজেক্টে ভুলবশত ডেটা পরিবর্তন হওয়া রোধ করে।

একটি উদাহরণের মাধ্যমে দেখা যাক:
class BankAccount {
    private balance: number = 1000;

    deposit(amount: number) {
        this.balance += amount;
        console.log("New Balance:", this.balance);
    }
}

const myAccount = new BankAccount();
myAccount.deposit(500);



3. Polymorphism
Polymorphism একই মেথডকে বিভিন্ন পরিস্থিতিতে ভিন্ন ভিন্ন ভাবে কাজ করার সুযোগ দেয়। এটি মূলত Method Overriding এর মাধ্যমে কাজ করে। এতে করে আমরা একটি সাধারণ ইন্টারফেস ব্যবহার করে অনেক ধরনের কাজ করতে পারি।

সুবিধা: কোডকে আরও ফ্লেক্সিবল করে এবং কন্ডিশনাল লজিক if-else কমায়।

একটি উদাহরণের মাধ্যমে দেখা যাক:
class Bird {
    makeSound() {
        console.log("Bird calling");
    }
}

class Pigeon extends Bird {
    makeSound() { 
        console.log("Bak-bakum! Bak-bakum!");
    }
}

const myBird: Bird = new Pigeon();
myBird.makeSound();


4. Abstraction
Abstraction জটিল লজিককে আড়ালে রেখে শুধু প্রয়োজনীয় অংশটুকু ইউজারকে দেখায়। টাইপস্ক্রিপ্টে abstract ক্লাস বা interface ব্যবহার করে আমরা কাজের একটি ব্লু-প্রিন্ট তৈরি করতে পারি।

সুবিধা: ডেভেলপারকে অপ্রয়োজনীয় ডিটেইলস নিয়ে ভাবতে হয় না, ফলে প্রজেক্টের জটিলতা কমে।

একটি উদাহরণের মাধ্যমে দেখা যাক:
abstract class Machine {
    abstract start(): void; 
}

class Car extends Machine {
    start() {
        console.log("Car engine started with fuel and spark plugs. And I am doing assignment and getting error");
    }
}

const myCar = new Car();
myCar.start();



পরিশেষে বলা যায়,বড় প্রজেক্টে যখন হাজার হাজার লাইন কোড থাকে, তখন OOP-এর এই চারটি Pillar ছাড়া কাজ করা প্রায় অসম্ভব। Inheritance কোড কমায়, Encapsulation নিরাপত্তা দেয়, Polymorphism ফ্লেক্সিবিলিটি বাড়ায় এবং Abstraction জটিলতা দূর করে। Typescript এর সাথে এই কনসেপ্টগুলো ব্যবহার করলে  প্রজেক্ট হবে স্কেলেবল এবং মেইনটেইনেবল।