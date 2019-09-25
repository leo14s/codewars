/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the
 * letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar
 * cipher.
 * Create a function that takes a string and returns the string ciphered with
 * Rot13. If there are numbers or special characters included in the string,
 * they should be returned as they are. Only letters from the latin/english
 * alphabet should be shifted, like in the original Rot13 "implementation".
 */

function rot13(message) {
  console.log(String.fromCharCode(65, 90));
  console.log(String.fromCharCode(97, 122));
  console.log(message.charCodeAt(0));
  console.log(message.charCodeAt(1));
  console.log(message.charCodeAt(2));
  //character == character.toUpperCase()

  return message.split("").map(letter => {
    return String.fromCharCode(
      letter.charCodeAt(0) + 15 > 90
        ? letter.charCodeAt(0) + 15 - 90 + 65
        : letter.charCodeAt(0) + 15
    );
  });
}

console.log(rot13("abc"));
