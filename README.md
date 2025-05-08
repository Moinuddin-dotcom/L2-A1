# **What are some differences between interfaces and types in TypeScript?**

In TypeScript, both `interface` and `type` can be used to describe the shape of data. While they often appear similar, there are key differences that make each suited for different scenarios.

**✅ Primitive Types: Only with Type Alias:**

    - type RollNumber = number;

We cannot use `interface` for primitives like `number`, `string`, etc., because `interface` is designed to describe the shape of objects.

**✅ Objects: Both Type Alias and Interface**
Both type and interface can be used to describe object shapes:

```
// Using interface
interface User {
  name: string;
  age: number;
}

// Using type alias
type User = {
  name: string;
  age: number;
};
```

**✅ Extending Types**

We can extend or compose types in both:

**Using type with intersection:**

```
type User = {
  name: string;
  age: number;
};

type UserWithRole = User & { role: string };

const user: UserWithRole = {
  name: 'Forklin',
  age: 22,
  role: 'admin',
};
```

**Using interface with extends:**

```
interface User {
  name: string;
  age: number;
}

interface UserWithRole extends User {
  role: string;
}

const user: UserWithRole = {
  name: 'Forklin',
  age: 22,
  role: 'admin',
};
```

**✅ Arrays: Possible with Both, Cleaner with Type Alias**

Type aliases are generally cleaner for arrays:
```
type RollNumbers = number[];

const rolls: RollNumbers = [1, 2, 3];
```


Using interface for arrays requires index signatures:
```
interface RollNumbers {
  [index: number]: number;
}

const rolls: RollNumbers = [1, 2, 3];
```

**✅ Functions: Both Work**

We can describe function types using both:

```
// Using type alias
type Add = (num1: number, num2: number) => number;

// Using interface
interface AddFn {
  (num1: number, num2: number): number;
}

const add: AddFn = (num1, num2) => num1+ num2;
```


**🎯 Finally**
- Use `type` for **primitives**, **arrays**, **tuples, and union types**.
- Use `interface` when working with **object shapes**, especially when you expect to extend them.
- For **arrays and functions**, `type` is often cleaner, but both approaches are valid.