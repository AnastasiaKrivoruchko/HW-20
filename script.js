const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.
let countOfPositive = 0;
let sumOfPositive = 0;

const positiveArr = arr.filter(function(val) {
  return val > 0;
})
 
positiveArr.forEach(function(val) {
  sumOfPositive += val;
})

countOfPositive = positiveArr.length;

console.log(`
Кількість позитивних елементів ${countOfPositive}
Сума позитивних елементів ${sumOfPositive}
`)
 
// Знайти мінімальний елемент масиву та його порядковий номер.
// Знайти максимальний елемент масиву та його порядковий номер.
let max = getMaxValue(arr);
let min = getMinValue(arr);
 
function getMaxValue(arr) {
  let max = arr[0]; 
  arr.forEach(function(val) {
    if (max < val) max = val
  });
  return max;
}
 
function getMinValue(arr){
  let min = arr[0];
  arr.forEach(function(val) {
    if (min > val) min = val
  });
  return min;
}

console.log(`
Мінімальний елемент масиву ${min}, його порядковий номер ${arr.indexOf(min)}
Максимальний елемент масиву ${max}, його порядковий номер ${arr.indexOf(max)}
`)

// Визначити кількість негативних елементів.
const negativeNum = arr.filter(function(val) {
  return val < 0;
})

countOfnegative = negativeNum.length;

console.log(`Кількість негативних елементів ${countOfnegative}`)

// Знайти кількість парних позитивних елементів.
const doublePositive = positiveArr.filter(function(val) {
  return val % 2 === 0;
})

console.log(`Кількість парних позитивних елементів ${doublePositive.length}`);

// Знайти суму парних позитивних елементів.
let doublePositiveSumm = 0;
doublePositive.forEach(function(val) {
  doublePositiveSumm += val;
})

console.log(`Сума парних позитивних елементів ${doublePositiveSumm}`);

// Знайти кількість непарних позитивних елементів.
const unpairedPositive = positiveArr.filter(function(val) {
  return val % 2 !== 0;
})

console.log(`Кількість непарних позитивних елементів ${unpairedPositive.length}`);

// Знайти суму непарних позитивних елементів.
let unpairedPositiveSumm = 0;
unpairedPositive.forEach(function(val) {
  unpairedPositiveSumm += val;
})

console.log(`Сума непарних позитивних елементів ${unpairedPositiveSumm}`)

// Знайти добуток позитивних елементів.
let productOfPositive = 1;
positiveArr.forEach(function(val) {
  productOfPositive *= val;
})

console.log(`Добуток позитивних елементів ${productOfPositive}`)

// Знайти найбільший серед елементів масиву, остальні обнулити.
const newArr = arr.map(function(val) {
  if (max !== val) {
    val = 0;
  } 
  return val; 
})

console.log(newArr);