//ES6 Version 
let count = 0;
const countEl = document.getElementById("count");

// increase counter
const increase = () => {
  count++;
  countEl.textContent = count;
};

// decrease counter (with condition)
const decrease = () => {
  if (count > 0) {
    count--;
  } else {
    alert("Counter cannot go below 0");
  }
  countEl.textContent = count;
};

// reset counter
const reset = () => {
  count = 0; // simpler than loop
  countEl.textContent = count;
};


//old version
// let count = 0;
// const countEl = document.getElementById("count");

// // increase counter
// function increase() {
//   count++;
//   countEl.textContent = count;
// }

// // decrease counter (with condition)
// function decrease() {
//   if (count > 0) {
//     count--;
//   } else {
//     alert("Counter cannot go below 0");
//   }
//   countEl.textContent = count;
// }

// // reset counter (using loop)
// function reset() {
//   for (let i = count; i > 0; i--) {
//     count--;
//   }
//   countEl.textContent = count;
// }
