const IncrementBtn = document.getElementById("IncrementBtn");
const IncrementBtn5 = document.getElementById("IncrementBtn5");
const DecrementBtn = document.getElementById("DecrementBtn");
const DecrementBtn5 = document.getElementById("DecrementBtn5");
const resetBtn = document.getElementById("reset");

const resultEle1 = document.getElementById("result1");
console.log(IncrementBtn);
let counter1 = 0;
IncrementBtn.addEventListener("click", function () {
  console.log("Clicking");
  counter1++;
  resultEle1.textContent = counter1;
});
DecrementBtn.addEventListener("click", function () {
  if (counter1 > 0) {
    counter1--;
    resultEle1.textContent = counter1;
  }
});
IncrementBtn5.addEventListener("click", function () {
  counter1 = counter1 + 5;
  resultEle1.textContent = counter1;
});
DecrementBtn5.addEventListener("click", function () {
  if (counter1 >= 5) {
    counter1 = counter1 - 5;
    resultEle1.textContent = counter1;
  }
});
resetBtn.addEventListener("click", function () {
  counter1 = 0;
  resultEle1.textContent = counter1;
});
