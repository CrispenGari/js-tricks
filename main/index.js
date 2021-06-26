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
