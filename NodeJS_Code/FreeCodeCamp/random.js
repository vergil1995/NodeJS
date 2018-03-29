function randomFraction() {
    return Math.random();       // always return < 1
  }

function randomWholeNum() {

// Only change code below this line.
var randomNumberBetween0and9 = Math.floor(Math.random() * 10);  // floor la lam tron
return randomNumberBetween0and9;        // 0-9 co 10 so
}

function randomRange(myMin, myMax) {
    var varRet = 0;
    
    varRet = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;       //VD 9-0+1=10
    return varRet; 
  }
var randomNumber = 0;
randomNumber = randomFraction();
console.log(randomNumber);
randomNumber = randomWholeNum();
console.log(randomNumber);
randomNumber = randomRange(5, 15);
console.log(randomNumber);