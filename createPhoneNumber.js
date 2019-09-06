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
