<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>greetign has been written without any kind of variable declaration. There is no const, let or var keyword before it, which is why the answer is not undefined or the empty object, but the `ReferenceError: greetign is not defined`</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The second argument given in the function call is a string and a string can never be added with a number, therefore what happens here is that the number type is type coerced and turned into a string since javascript is a dynamically/ weak typed language. Then after 1 becomes a string, they are concatenated and the answer becomes 12</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The food array will remain unchanged and the console.log will be the same food array. Here the favorite food proeprty of the info object is being changed which has no relation with the food array. Since 0 index of food array is not being assigned a new value, so the value of food array and food[0] remains the same</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The name local variable inside the function remains undefined since no value for the parameter was passed. The function was called without any arguments, therefore the template literal will create hi there and then the undefined (value of the name parameter/ local variable)</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>When checking if(num) the 0 , which is the first element of the array, it returns a falsy value thus false, so the count+=1 code is not executed for the first element, but since the other elements are truthy values, thus returns true, the code in the if block runs 3 times and since only 3 of them are truthy values out of 4, the count is added 3 times and returns 3 because the count started from 0.</i>

</p>
</details>
