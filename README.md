**What are some differences between interfaces and types in TypeScript?**

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