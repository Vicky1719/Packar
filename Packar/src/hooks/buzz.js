const fizzNumber = () => {
  for (let i = 0; i < 100; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
  for (let i = 0; i < 100; )
    console.log((i++ % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
};
fizzNumber();
