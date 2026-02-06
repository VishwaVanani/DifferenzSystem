// Converted functions → arrow functions

// Replaced var → const / let

// Replaced loops with map/filter

// Used spread operator for immutability

// Processed the user list cleanly
const users = [
  { id: 1, name: "Ali", age: 22, isActive: true },
  { id: 2, name: "Sara", age: 17, isActive: false },
  { id: 3, name: "John", age: 25, isActive: true }
];

const getUserNames = () => users.map(user => user.name);
const getActiveUsers = () => users.filter(user => user.isActive);

const newUser = { id: 4, name: "Mike", age: 30, isActive: true };
const updatedUsers = [...users, newUser];

const updatedUsers2 = users.map(user =>
  user.id === 2 ? { ...user, age: 18 } : user
);

console.log("User Names:", getUserNames());
console.log("Active Users:", getActiveUsers());
console.log("Updated Users:", updatedUsers);
console.log("Updated Sara Age:", updatedUsers2);
