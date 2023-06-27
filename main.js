//KATA 1
// https://www.codewars.com/kata/514aa0dc21607ae236000017/train/javascript


function greet(name) {
  return `Hello, ${name}!`
};

console.log(greet('Abe'))
console.log(greet('Ben'))

// KATA 2
// https://www.codewars.com/kata/54dba07f03e88a4cec000caf/train/javascript

function Dog(breed) {
  this.breed = breed;
  this.bark = function() {
    return 'Woof'
  }
}

const snoopy = new Dog("Beagle");
const scoobydoo = new Dog("Great Dane");
console.log(snoopy.bark())
console.log(scoobydoo.bark())

// KATA 3
// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript

function match(candidate, job) {
  if ((candidate.minSalary == undefined) || (job.maxSalary == undefined)) {throw 'error'};
  return (candidate.minSalary * 0.9 <= job.maxSalary)
}


// KATA 3
// https://www.codewars.com/kata/5731861d05d14d6f50000626

function bigToSmall(arr){
  return [].concat(...arr).sort((a,b) => b - a).join('>');
}

console.log(bigToSmall([[1,2],[3,4],[5,6]]))

// KATA 4
// https://www.codewars.com/kata/56aed32a154d33a1f3000018/train/javascript

function myFirstKata(a, b) {
  return (typeof a === 'number' && typeof b === 'number') ? (a % b) + (b % a) : false;
}
myFirstKata(3,5)
console.log(myFirstKata('three', 5))
myFirstKata(true,true)

// KATA 5
// https://www.codewars.com/kata/526471539d52735c620000c6/train/javascript


function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};

