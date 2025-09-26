function rollDice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//console.log(rollDice(1, 6));

// const rollAnotherDice = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// console.log(rollDice(1, 10));

//callback funktion

function guessTheNumber(luckyNumber, congrats) {
  const numberFromDice = rollDice(1, 6);

  if (luckyNumber === numberFromDice) {
    return congrats(luckyNumber);
  }

  return `Sorry it's not the correct number, you picked ${luckyNumber} and the dice shows ${numberFromDice}`;
}

function congrats(number) {
  return `Jubiii you gussed correct with number: ${number}`;
}

console.log(guessTheNumber(3, congrats));
