function createPhoneNumber(numbers) {
  let number = "(";
  for (let i = 0; i < numbers.length; i++) {
    if (i - 1 == 2) {
      number += ") ";
    }
    if (i - 1 == 5) {
      number += "-";
    }
    number += numbers[i];
  }
  return number;
}

function createPhoneNumber(numbers) {
  return numbers.reduce((p, c) => p.replace("x", c), "(xxx) xxx-xxxx");
}

function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  return (
    "(" +
    numbers.substring(0, 3) +
    ") " +
    numbers.substring(3, 6) +
    "-" +
    numbers.substring(6)
  );
}

function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
}
