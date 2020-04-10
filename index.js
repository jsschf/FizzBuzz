/*
  Simple loop that uses modulus operator to return "Fizz" or "Buzz" if
  'i' is divisible by 3 or 5, respectively, otherwise prints 'i'.

  I also feel this solution is optimal, Big-O complexity is O(n),
  n in this case is 100
*/
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else console.log(i);
}
