// Problem 1
// function formatString(input: string, toUpper?: boolean): string {
//     if (toUpper === true || toUpper === undefined) {
//         console.log(input.toUpperCase())
//         return input.toUpperCase();
//     } else {
//         console.log(input.toLowerCase())
//         return input.toLowerCase();
//     }
// }

// formatString("hello world", false);


// Problem 2

// const books = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 }
// ];

// function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
//     const res = items.filter(item => item.rating >= 4);
//     return res
// }

// console.log(filterByRating(books))


// Problem 3

// function concatenateArrays<T>(...arrays: T[][]): T[] {
//     return arrays.reduce((acc, curr) => acc.concat(curr), []);
// }
// console.log(concatenateArrays([1, 2], [3, 4], [5]))



// Problem 4

// class Vehicle {
//     private make: string;
//     private year: number;
//     constructor(make: string, year: number) {
//         this.make = make;
//         this.year = year;
//     }
//     getInfo() {
//         console.log(`Make: ${this.make}, Year: ${this.year}`)
//     }
// }

// class Car extends Vehicle {
//     private model: string;
//     constructor(make: string, year: number, model: string) {
//         super(make, year);
//         this.model = model;
//     }
//     getModel() {
//         console.log(`Model: ${this.model}`)
//     }
// }

// const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();
// myCar.getModel();
