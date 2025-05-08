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
