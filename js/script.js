let sayHi = function (string) {
  let arrWord = string.split(" ");

  let longestWord = arrWord[0];

  for (let i = 0; i < arrWord.length; i++) {
    if (arrWord[i].length < longestWord.length) {
      longestWord = arrWord[i];
    };
  };

  return longestWord;
};
let result = sayHi("mers bmw lada chevrolet skoda kia");
console.log("mers bmw lada chevrolet skoda kia so'zlaridan eng kichigi");
console.log(result);

// Home-work-2:

let sayHi2 = function (string2) {

  let longestWord2 = numbers[0];

  for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] > longestWord2) {
      longestWord2 = numbers[a];
    }
  }

  return longestWord2;
}
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 4, 90, 100, 5];
let result2 = sayHi2();
console.log(`10, 20, 30, 40, 50, 60 ,70 ,80, 4, 90 , 100, 5 sonlaridan eng kattasi`);
console.log(` ${result2}`);

// Home-work-3:
let sayHi3 = function (string3) {

  let arrNumbers3 = numbers3[0];

  for (let l = 0; l < numbers3.length; l++) {
    if (numbers3[l] < arrNumbers3) {
      arrNumbers3 = numbers3[l];
    }
  }

  return arrNumbers3;
}
let numbers3 = [10, 40, 50, 60, 70, -80, 4, 90, 100];
let result3 = sayHi3();
console.log(`10, 20, 30, 40, 50, 60 ,70 ,-80, 4, 90 , 100, 5 sonlaridan eng kichigi`);
console.log(`${result3}`);