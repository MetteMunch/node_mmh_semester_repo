// Loop metoder: .forEach .find .filter  .map  .reduce  .indexOf
//metoder bliver kaldt med paranteser
//forEach looper gennem hele listen, men returnere ikke en ny liste lige som map
//filter creates a new array as map with filtered element according to conditions

console.log("loop methods are fun");
//Nodemon

//tjek ud side effects

const numbers = [1, 2, 3, 4, 5]; //brug loop metoder medmindre i tæller med fingrene

//assignment: double the numbers above

// map returns a new list 1:1
const result = numbers.map((number) => number * 2);
console.log(result);

const desserts = [
  {
    name: "flan",
    weightGram: 200,
  },
  {
    name: "banana split",
    weightGram: 700,
  },
  {
    name: "brownie",
    weightGram: 600,
  },
];

//assigntment - make all desserts weight 400 g extra except brownie

const dessertResult = desserts.map((dessert) => {
  if (dessert.name !== "brownie") {
    dessert.weightGram += 400;
  }
  return dessert;
});
console.log(dessertResult);

//husk return ved curlybraces

numbers.map((element, index, array) => console.log(element, index, array));
