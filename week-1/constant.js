// ===============================
// Constants and Variables
// ===============================
console.log("=== Constants and Variables ===");

const PI = 3.14;
let radius = 3;

console.log("PI:", PI);
console.log("Radius:", radius);
console.log("Area:", PI * radius * radius);

// ===============================
// Type Coercion
// ===============================
console.log("=== Type Coercion ===");

const one = 1;
const two = "2";

console.log("one + two =", one + two);      // "12"
console.log("one + Number(two) =", one + Number(two)); // 3
console.log("one == two =", one == two);    // true
console.log("one === two =", one === two);  // false

// ===============================
// Global and Block Scope
// ===============================
console.log("=== Global and Block Scope ===");

let course = "WDD131"; // global scope

if (true) {
  let student = "John";
  console.log("Course (inside block):", course);
  console.log("Student (inside block):", student);
}

console.log("Course (outside block):", course);

// Uncommenting the next line would cause an error:
// console.log(student);
