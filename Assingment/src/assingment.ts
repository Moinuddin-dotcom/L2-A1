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



// Problem 5

// function processValue(value: string | number): number {
//     if (typeof value === "string") {
//         const valLength = value.length;
//         console.log(valLength)
//         return valLength;
//     } else {
//         console.log(value * 2)
//         return value * 2;
//     }
// }

// processValue("hello");
// processValue(10);


// Problem 6

// interface Product {
//     name: string;
//     price: number;
// }

// function getMostExpensiveProduct(products: Product[]): Product | null {
//     if (products.length === 0) {
//         return null;
//     }

//     let mostExpensiveProduct = products[0];

//     for (const product of products) {
//         if (product.price > mostExpensiveProduct.price) {
//             mostExpensiveProduct = product;
//         }
//     }

//     return mostExpensiveProduct;
// }

// const products: Product[] = [
//     { name: "Pen", price: 10 },
//     { name: "Notebook", price: 25 },
//     { name: "Bag", price: 50 }
// ];

// const result: Product | null = getMostExpensiveProduct(products)
// console.log(result);



// Problem 7

// enum Day {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }

// function getDayType(day: Day): string {
//     if (day === Day.Sunday) {
//         return 'Weekend'
//     }
//     return 'Weekday'
// }

// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Sunday));
