### JavaScript Tricks

This README file contains some crazy simple `js` snippets that will speed someone's code like **crazy**.

### Destructuring.

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

Example on arrays

```js
const numbers = [1, 2];
[a, b] = numbers;
console.log("a = ", a, "\nb = ", b);
/* OUTPUT
a =  1
b =  2
*/
```

Example on objects

```js
const object = { name: "name", age: 67 };
const { name, age } = object;
console.log(name, age);

/* OUTPUT
name 67
*/
```

### Object aliases

This allows us to rename object properties when doing. Let's see this in action.

```js
const student = {
  name: "student",
  age: 18,
  gender: "male",
};
const { name: studentName, age: studentAge, gender: studentGender } = student;

console.log(studentName, studentGender, studentAge);

/* OUTPUT
student male 18
*/
```

### Dynamic object property creation

Sometimes it is useful to create object keys dynamically, we can do it as follows:

```js
let dynamic = "location";
const student = {
  name: "student",
  age: 18,
  gender: "male",
  [dynamic]: "Location",
};

console.log(student);

/*
{name: "student", age: 18, gender: "male", location: "Location"}
*/
```

### Randomly Shuffle Arrays

```js
const numbers = [1, 2, 3, 4, 5];
const shuffled = numbers.sort((_) => Math.random() - 0.5);
console.log(shuffled);

// SHUFFLING OBJECTS

const numbers = [{ name: 1 }, { name: 5 }, { name: 6 }, { name: 7 }];
const shuffled = numbers.sort((_) => Math.random() - 0.5);
console.log(shuffled);
```

### Removing Duplicates from an array

Method 1

```js
const numbers = [1, 1, 1, 2, 3, 4, 5, 1];

const final = Array.from(new Set(numbers));

console.log(final);

// Output

// [1, 2, 3, 4, 5]
```

Method 2

```js
const numbers = [1, 1, 1, 2, 3, 4, 5, 1];

const final = [...new Set(numbers)];
console.log(final);
```

### console.assert()

This method helps us to display an assertion error based on a condition. It takes the condition as it's first argument and then the message. **Note:** If the condition is met then nothing will be displayed.

```js
console.assert(9 === 10, "9 is not equal to 10");

// Output
/*
index.js:1 Assertion failed: 9 is not equal to 10
*/
```

### console.table()

This draws a nice table on the console by taking an array of object as it's argument and figure out the keys as the heads of the table.

```js
const obj = [
  { name: "John", age: 14 },
  { name: "Doe", age: 14 },
];
console.table(obj);
```

### Array slicing

Basic slicing

```js
const arr = [2, 2, 4, 7];
console.log(arr.slice(-3)); // last 3 elements
console.log(arr.slice(1)); // takes element from index 1 to the end
console.log(arr.slice(1, 3)); // takes elements from index 1 to 2
```

Let's say we want to take first 2 elements of the array from our previous array. We can do it as follows:

```js
const arr = [2, 2, 4, 7];
arr.length = 2;
console.log(arr); // [2, 2]
```

### Creating an object from an array

This is very easy as to:

```js
const arr = [2, 2, 4, 7];

const obj = { ...arr };
console.log(obj);

// {0: 2, 1: 2, 2: 4, 3: 7}
```

### Object.keys()

Get the keys of an object and creates an array

```js
const arr = [2, 2, 4, 7];
const obj = { ...arr };
console.log(Object.keys(obj));

// ["0", "1", "2", "3"]
```

### Object.values()

Get the values of an object and creates an array

```js
const arr = [2, 2, 4, 7];
const obj = { ...arr };
console.log(Object.values(obj));
```

### Object.entries()

Returns an array of arrays with keys and their respective values in the same array. Example

```js
const arr = [2, 2, 4, 7];
const obj = { ...arr };
console.log(Object.entries(obj));

/* OUTPUT
0: (2) ["0", 2]
1: (2) ["1", 2]
2: (2) ["2", 4]
3: (2) ["3", 7]

*/
```

### Measuring the performance of the code:

Checking how many milliseconds does the code takes to execute.

```js
const start = performance.now();
for (i = 0; i < 100000; i++) {
  continue;
}
const end = performance.now();

console.log("The code took: ", end - start, " milliseconds to execute.");
```

### Swapping position of elements in an array:

```js
const array = [1, 2, 3, 4, 5];

[array[0], array[4]] = [array[4], array[0]];

console.log(array); // [5, 2, 3, 4, 1]
```

### Swapping numbers

Method 1 - using arrays

```js
let a = 5;
let b = 10;

[a, b] = [b, a];
console.log(a, b); // 10, 5
```

Method 2 - using the math

```js
let a = 5;
let b = 10;
a = (b += a -= b) - a;
console.log(a, b);
```

### The `??` operator in JavaScript.

This assignment operator checks if the left is true, if not it evaluates to the right.

```js
b = a ?? true;
console.log(b);
// true
```

### Returning elements that are not [undefined, false, zero, null, ...] from an array.

```js
const array = [1, 2, 0, "", null, 6, undefined, false, true];

const notNull = array.filter(Boolean);
console.log(notNull); // [1, 2, 6, true]
```

### Checking if all of the elements are equal in an array

```js
const a = [1, 2, 3];
const b = [1, 2, 3];

const isEqual = (a, b) => {
  return a.length === b.length && a.every((ele, i) => ele === b[i]);
};

console.log(isEqual(a, b)); // true
```

### JavaScript Spread operator (aka) `...`

This operator works on arrays, objects as well as functions. The spread operator is just `weird` . The way i understood this operator was to think about it this way:

> '**The act of removing brackets...**'

1. On functions

Instead of printing the actual array the console will print each individual element. **This works on every iteratable for example on `Strings`**

```js
const arr = [2, 3, 4, 4];
console.log(...arr); // 2 3 4 4
console.log(..."Hello"); // H e l l o
```

2. On arrays

Let's say we have arrays and we want to join them together we can do it using the spread `...` operator. Example:

```js
const names = [..."Hello"];
const ages = [2, 3, 4, 5];
const final = [3, ...names, true, ...ages]; // [3, "H", "e", "l", "l", "o", true, 2, 3, 4, 5]
```

3. On objects
   The same that applies to strings can apply to objects. On object we will be expanding an object by adding new properties to existing one. Example

```js
const object1 = {
  name: "hello",
  age: 2,
};
const object2 = {
  state: "Unknown",
  country: "ZA",
};

const final = { ...{ isCorrect: true, isValid: true }, ...object1, ...object2 };
console.log(final);

/* Output
{isCorrect: true, isValid: true, name: "hello", age: 2, state: "Unknown", …}
*/
```

### Displaying Objects on the dom in a nice way.

HTML Code

```html
<body>
  <div id="object">
    <pre></pre>
  </div>
  <script src="index.js"></script>
</body>
```

JavaScript Code

```js
const students = [
  {
    name: "John",
    age: 15,
    likes: [2, 5, 8, 9],
  },
  {
    name: "Peter",
    age: 15,
    likes: [2, 5, 8, 9],
  },
];

document.querySelector("pre").innerText = JSON.stringify(students, null, 2);
```

### Arguments to a function

Suppose we have a function called `draw` this function takes in two arguments `position` and `velocity`. This function looks as follows:

```js
const draw = (position, velocity) => {
  return {
    position,
    velocity,
  };
};
```

But you will noticed that when calling this function both `position` and `velocity` must be passed to the function `draw` in order for the function to execute as follows:

```js
console.log(
  draw(
    {
      x: 10,
      y: 0,
    },
    {
      x: 10,
      y: 0,
    }
  )
);
```

Let's say we have a situation or snerio where passing someone can either pass `position` or `velocity` or all of them or neither as argument to this function for example as follows:

```js
console.log(draw());
console.log(
  draw({
    position: 0,
    velocity: 10,
  })
);
console.log(
  draw({
    position: 0,
  })
);
console.log(draw({ velocity: 10 }));
```

In order for our function to do this, we need to create it as follows:

```js
const draw = ({ position, velocity }) => {
  return {
    position,
    velocity,
  };
};
```

When creating a function in like this the order of passing arguments to a function does not mater and also the number of arguments passed to a function also does not mater.

### Local `||` assignment Operator

The logical `||` assignment Operator is used to values to a variable let's consider the following situation about the variable `name`

```js
let name;
if (!name) {
  name = "World";
}
console.log({ name });
```

We are just assigning the value of name to `Wold` if the `name` if `falsy` alternatively using the logical assignment operator we can do it as follows:

```js
let name;
name ||= "World"; // same as saying name = name ? name : "world"
console.log({ name });
```

### Getter Property

We can use the getter property in an object to get a certain value, for example let's consider the following object.

```js
const user = {
  firstName: "John",
  lastName: "Doe",
  fullName: "John Doe",
};

console.log({ user });
```

So we can use the `getter` property to get the `fullName` as a computed object of `firstName` and `lastName` so our object will look as follows:

```js
const user = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log({ user });
```

### Proxy Object

Let's say we have a user object that looks as follows:

```ts
const user = {
  id: 1,
  username: "username",
  gender: "male",
  password: "password",
  email: "username@domain.com",
  age: 24,
};
console.log({ password: user.password });
```

Let's say the `password` and the `age` property of this object are very sensitive and we don't want to tell the user that they are logging sensetive information when they try to access these properties. We can use the `Proxy` object to create the `userProxy` object as follows:

```js
const userProxy = new Proxy(user, {
  get(target, property, reciever) {
    if (["password", "age"].includes(property)) {
      console.warn({
        message: "You are logging the sensetive information about the user",
        property: target[property],
      });
    }
    return Reflect.get(...arguments);
  },
});
console.log(userProxy.password);
```

We will get the following from our console.

```js
> {message: 'You are logging the sensetive information about the user', property: 'password'}
> 'password'
```
