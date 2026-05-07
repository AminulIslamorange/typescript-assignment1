                                      Question No 3: 
How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?


Title: TypeScript Generics: টাইপ সেফটি বজায় রেখে রিইউজেবল কোড তৈরির জাদুকরী উপায়। 

Introduction:
TypeScript-এর অন্যতম powerful feature হলো Generics। ডেভেলপার হিসেবে আমাদের সবসময় এমন কোড লিখতে হয় যা বারবার ব্যবহার করা যায় (Reusable)। কিন্তু টাইপস্ক্রিপ্টে অনেক সময় দেখা যায়, কোড রিইউজেবল করতে গিয়ে আমরা any টাইপ ব্যবহার করি, যা আসলে টাইপ সেফটি নষ্ট করে দেয়। এখানেই সমাধান হিসেবে আসে Generics। জেনেরিকস আমাদের এমন ফাংশন বা কম্পোনেন্ট তৈরি করতে সাহায্য করে যা বিভিন্ন ধরনের ডেটা স্ট্রাকচারের সাথে কাজ করবে, কিন্তু টাইপ থাকবে একদম নিখুঁত।


Why Generics?
সাধারণত আমরা যখন কোনো ফাংশন লিখি, তখন ইনপুটের টাইপ নির্দিষ্ট করে দিই (যেমন: number বা string)। কিন্তু যদি এমন হয় যে একই ফাংশন কখনো নম্বর আবার কখনো স্ট্রিং নিয়ে কাজ করবে? any ব্যবহার করলে টাইপস্ক্রিপ্ট আর চেক করতে পারে না ইনপুট আর আউটপুটের সম্পর্ক কী। জেনেরিকস আমাদের একটি "Type Variable" ব্যবহারের সুযোগ দেয়, যা ইনপুট অনুযায়ী নিজেকে বদলে নেয়। Generics ব্যবহার করে আমরা এমন reusable function, interface, class, বা component তৈরি করতে পারি যেগুলো বিভিন্ন ধরনের data নিয়ে কাজ করতে পারে, কিন্তু type safety ঠিক রাখে।

এর ফলে:
* একই code বারবার লিখতে হয় না
* reusable code তৈরি করা যায়
* strict typing বজায় থাকে ।

Example: Generic হলো এমন একটি feature যেখানে type আগে থেকে fixed না করে dynamically define করা যায়।

সাধারণত <T> ব্যবহার করা হয় generic type বোঝানোর জন্য।

const createArray = <T>(value: T): T[] => {
    return [value];
};

* T একটি generic type
* function যেকোনো type accept করতে পারবে



Generics ছাড়া আমাদের আলাদা আলাদা function লিখতে হয়।

const createStringArray = (value: string): string[] => {
    return [value];
};

const createNumberArray = (value: number): number[] => {
    return [value];
};

Generic ব্যবহার করলে একটাই function সব ধরনের data handle করতে পারে।
Generics automatically type detect করতে পারে।
তাই ভুল type দিলে error দেখাবে।

const createArray = <T>(value: T): T[] => {
    return [value];
};



পরিশেষে বলা যায়, টাইপস্ক্রিপ্ট জেনেরিকস কোডকে অনেক বেশি স্কেলেবল এবং ফ্লেক্সিবল করে তোলে। এটি ব্যবহার করলে  বারবার একই লজিক আলাদা টাইপের জন্য লিখতে হয় না (DRY Principle), আবার any ব্যবহার করার ঝুঁকিও নিতে হয় না। বড় ধরনের প্রজেক্ট বা রিইউজেবল লাইব্রেরি তৈরির ক্ষেত্রে জেনেরিকস অত্যন্ত জরুরি।
